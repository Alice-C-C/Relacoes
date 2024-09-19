import conn from "../conn.js"
const Schema = conn.Schema

const produtoraSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true
    },
    endereco: {
        type: Object,
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

const Produtora = conn.model("Produtora", produtoraSchema)

export default Produtora