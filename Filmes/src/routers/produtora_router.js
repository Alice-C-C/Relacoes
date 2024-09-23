import e from "express"
import ProdutoraController from "../controllers/produtora_controller.js"
import cep_endereco from "../midllewares/cep_endereco.js"

const router = e.Router()

router.post("/", /*Criar uma produtora*/ cep_endereco, ProdutoraController.store)
router.get("/", /*Listar todas as produtoras*/ProdutoraController.index)
router.get("/:id",/*Listar uma produtora*/ ProdutoraController.show)
router.put("/:id", /*Alterar uma produtora*/ProdutoraController.update)
router.delete("/:id", /*Deletar uma produtora*/ProdutoraController.destroy)

export default router