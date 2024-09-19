import conn from "../conn.js"
const Schema = conn.Schema

const diretorSchema = new Schema({
    endereCompleto: {
        type: Schema.Types.String,
        required: true
    },
    telefones: [{
        type: Schema.Types.String,
        required: true
    }],
    nascionalidade:{
        type: Schema.Types.String
    },
    genero:{
        type: Schema.Types.String,
        enum:["masculino", "feminino", "outro"],
        required: true
    }
})

const filmeSchema = new Schema({
    titulo: {
        type: Schema.Types.String,
        required: true
    },
    ano: {
        type: Schema.Types.Number,
        required: true
    },
    genero: {
        type: Schema.Types.String,
        required: true
    },
    diretor: diretorSchema,
    produtora:{
        type: Schema.Types.ObjectId,
        ref: "Produtora"
    }
})

