import e from "express";
import FilmeController from "../controllers/filme_controller.js";

const router = e.Router()

router.post("/", FilmeController.store)
router.get("/", FilmeController.index)
router.get("/:id", FilmeController.show)
router.put("/:id", FilmeController.update)
router.delete("/:id", FilmeController.destroy)

export default router