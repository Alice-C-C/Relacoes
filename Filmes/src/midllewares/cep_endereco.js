import conn from "../conn.js"
import axios from "axios"


const cep_endereco = (req, res, next) => {
   axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
   .then( (resposta) => {
      
       const {logradouro,bairro,localidade,uf,estado} = resposta.data
       delete req.body.cep 
       req.body.endereco = {logradouro,bairro,localidade,uf,estado}
    next()
 })
 .catch(error => res.status(400).json(error))
}
export default cep_endereco