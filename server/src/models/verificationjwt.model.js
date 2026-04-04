import mongoose from "mongoose";4


const verificationJwtSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'User'
    },
    jwt: {
        type: String,
        required: true
    }
});

const VerificationJwt = mongoose.model('VerificationJwt', verificationJwtSchema);

export default VerificationJwt;