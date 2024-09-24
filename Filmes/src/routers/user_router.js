import {Router} from "express";
import UserController from "../controllers/user_controller.js";

const router = Router()

router.post("/",/*Criar um usuario*/ UserController.store)
router.get("/", /*Listar todos os usuarios*/ UserController.index)
router.get("/:id", /*Listar um usuario*/UserController.show)
router.put("/:id", /*Alterar um usuario*/UserController.update)
router.delete("/:id", /*Deletar um usuario*/UserController.destroy)

export default router

router.post()