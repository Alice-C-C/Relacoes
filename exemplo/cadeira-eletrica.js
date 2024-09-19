import cnn from "./conn.js"

const Schema= cnn.Schema

const americanoMedioSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    dataNascimento:{
        type: Schema.Types.String,
        required: true
    }
})

const cadeiraEletrica = new Schema({
    voltagem: {
        type: Schema.Types.Number,
        required: true
    },
    americano: americanoMedioSchema
})

const CadeiraEletrica =  cnn.model("CadeiraEletrica", cadeiraEletrica)


const inserir =async ()=>{
    try{
        await CadeiraEletrica.create({
            americano:{
                nome:"John",
                dataNascimento:"01/01/2000"
            },
            voltagem: 380
        })
    }catch(error){
        console.log(error)
    }
}

inserir()