import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const main = async() => {
    try{
        await mongoose.connect(process.env.MONGODB),

        console.log("Connect by db")

    }catch(error){
        console.log(error)
    }

}

main()

export default mongoose