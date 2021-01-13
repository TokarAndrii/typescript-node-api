import { RequestHandler } from "express";
import { v4 as uuid_v4 } from "uuid";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next): void => {
  const name = (req.body as { name: string }).name;
  const newTodo = new Todo(uuid_v4(), name);
  TODOS.push(newTodo);

  res.status(201).json({ message: "successfully created", todo: newTodo });
};

export const getAllTodos: RequestHandler = (req, res, next) =>
  res.json({ message: "successfully get all todos list", todos: TODOS });
