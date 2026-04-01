import mongoose from "mongoose"

export const connectDB=async()=>{
    try {
        let id=process.env.MONGO_URI
        await mongoose.connect(id)
    .then(()=>{
            console.log('connected to mongoDB')
        })
    } catch (error) {
        console.log(error)
    }
}
