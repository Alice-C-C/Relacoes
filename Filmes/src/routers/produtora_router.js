import e from "express"
import ProdutoraController from "../controllers/produtora_controller.js"
import cep_endereco from "../midllewares/cep_endereco.js"

const router = e.Router()

router.post("/", cep_endereco, ProdutoraController.store)
router.get("/", ProdutoraController.index)
router.get("/:id", ProdutoraController.show)
router.put("/:id", ProdutoraController.update)
router.delete("/:id", ProdutoraController.destroy)

export default router