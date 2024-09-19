import conn from "../conn.js"
const Schema = conn.Schema

const produtoraSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    endereCompleto: {
        type: Schema.Types.String,
        required: true
    },
    telefones: [{
        type: Schema.Types.String,
        required: true
    }],
    filmes:[{
        type: Schema.Types.ObjectId,
        ref: "Filme"
    }]
})