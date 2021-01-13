import { Router } from "express";
import { createTodo, getAllTodos } from "../controllers/todos";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodos);
router.patch("/:id");
router.delete("/:id");

export default router;
