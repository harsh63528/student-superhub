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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("User:", user);
        console.log("Password from DB:", user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (!user.verified) {
            return res.status(403).json({ message: "Verify your email first" });
        }

        const token = generateToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        });

        res.status(200).json({ message: "Login success" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const checkaccount = async (req, res) => {
    try {
        const {token} = req.cookies;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        res.status(200).json({ user });
    } catch (error) {        res.status(500).json({ message: "Server error" });
    }}

    export const logoutUser = async (req, res) => {
        try {
            res.clearCookie("token");
            res.status(200).json({ message: "Logout success" });
        } catch (error) {
            res.status(500).json({ message: "Server error" });
        }}