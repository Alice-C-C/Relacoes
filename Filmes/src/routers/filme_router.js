import {Router} from "express";
import FilmeController from "../controllers/filme_controller.js";
import cep_endereco from "../midllewares/cep_endereco.js";

const router = Router()

router.post("/",/*Criar um filme*/cep_endereco, FilmeController.store)
router.get("/", /*Listar todos os filmes*/ FilmeController.index)
router.get("/:id", /*Listar um filme*/FilmeController.show)
router.put("/:id", /*Alterar um filme*/FilmeController.update)
router.delete("/:id", /*Deletar um filme*/FilmeController.destroy)

export default router