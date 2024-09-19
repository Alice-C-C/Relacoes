import mongoose from "mongoose";
const main = async() => {
    try{
        await mongoose.connect(`mongodb+srv://alicec:aluno@cluster0.3rfam.mongodb.net/filme`),

        console.log("Connect by db")

    }catch(error){
        console.log(error)
    }

}

main()

export default mongoose