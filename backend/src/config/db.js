import mongoose from "mongoose"

export const connectBD = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("moongose connected succesfull");
    } catch (error) {
        console.log("error connecting to MongoDb",error)
        process.exit(1)
    }
}