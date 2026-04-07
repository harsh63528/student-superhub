import User from "../../models/user.model.js";
import generateToken from "../../utility/jwtToken.utility.js";
import { sendVerificationEmail } from "../../services/mail.services.js";

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

        const user = new User({ name, email, password });
        await user.save();

        const token = generateToken(user);
        
        const emailSent = await sendVerificationEmail(email, token);

        if (!emailSent) {
            return res.status(500).json({ message: 'Failed to send verification email' });
        }
        

        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}