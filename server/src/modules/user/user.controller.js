import User from "../../models/user.model.js";
import generateToken from "../../utility/jwtToken.utility.js";
import  sendVerificationEmail  from "../../services/mail.services.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser= await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message:'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        const token = generateToken(user);
        
        const emailSent = await sendVerificationEmail(email, token);

        if (!emailSent) {
            return res.status(500).json({ message: 'Failed to send verification email' });
        }
        res.status(201).json({ message: 'User registered successfully. Please check your email to verify your account.' });
        

        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export async function verifyEmail(req, res) {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    console.log("Token received:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded payload:", decoded);

    if (!decoded.id) {
      return res.status(400).json({ message: 'Token payload missing id' });
    }

    const user = await User.findById(decoded.id);
    console.log("User found:", user);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    user.verified = true;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
}

export async function loginUser(req, res) {
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message:'All fields are required'})
        }

        const isExist=await User.findOne({email});
        if(!isExist){
            return res.status(400).json({message:'Invalid credentials email'})
        }
        const isMatch=await bcrypt.compare(password,isExist.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid credentials password'})
        }
        if(!isExist.verified){
            return res.status(400).json({message:'Please verify your email before logging in'})
        }
        const token=generateToken(isExist);
        res.cookie('token', token, { httpOnly: true, secure: !!(process.env.NODE_ENV === 'production'), sameSite: 'strict' });

        res.status(200).json({user:{id:isExist._id,name:isExist.name,email:isExist.email}});

    }catch(error){
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
