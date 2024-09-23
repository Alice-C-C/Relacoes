import conn from "../conn.js"

const Schema = conn.Schema

const diretorSchema = new Schema({
    endereco: {
        type: Schema.Types.Mixed,
        required: true
    },
    telefones: [{
        type: Schema.Types.Number,
        required: true
    }],
    nacionalidade:{
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
        type: Schema.Types.Date,
        required: true
    },
    genero: {
        type: Schema.Types.String,
        enum:["TERRO", "ROMANCE", "COMÉDIA"],
        required: true,
        dafault: "COMÉDIA"
    },
    diretor: diretorSchema,
    produtora:{
        type: Schema.Types.ObjectId,
        ref: "Produtora"
    }
})

const Filme = conn.model("Filme", filmeSchema)

export default Filme