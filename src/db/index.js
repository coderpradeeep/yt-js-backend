import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// This line below will throw error
// due to late configuration updates
// const dbUri = process.env.DB_URI

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.DB_URI}/${DB_NAME}`
        )

        console.log(`MongoDB connected !! DB HOST ${
            connectionInstance.connection.host
        }`)
    }
    catch (error) {
        console.error("MONGODB connection error :", error)
        process.exit(1)
    }
}

export default connectDB