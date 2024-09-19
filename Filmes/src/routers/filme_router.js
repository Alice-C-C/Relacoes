import e from "express";
import FilmeController from "../controllers/filme_controller.js";
import cep_endereco from "../midllewares/cep_endereco.js";

const router = e.Router()

router.post("/", cep_endereco, FilmeController.store)
router.get("/", FilmeController.index)
router.get("/:id", FilmeController.show)
router.put("/:id", FilmeController.update)
router.delete("/:id", FilmeController.destroy)

export default router