import mongoose from "mongoose";

const mongoDB = "mongodb+srv://alicec:aluno@cluster0.3rfam.mongodb.net/subDocumentos"
const database = "subdocumentos"

const main = async () => {
    try {
        await mongoose.connect(mongoDB + database)
        console.log("Conectado com sucesso")
    } catch (error) {
        console.log(error)
    }
}

main()

export default mongoose

