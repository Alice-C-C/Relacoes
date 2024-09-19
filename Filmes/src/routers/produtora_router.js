import e from "express"
import ProdutoraController from "../controllers/produtora_controller.js"

router.post("/", ProdutoraController.store)
router.get("/", ProdutoraController.index)
router.get("/:id", ProdutoraController.show)
router.put("/:id", ProdutoraController.update)
router.delete("/:id", ProdutoraController.destroy)

export default router