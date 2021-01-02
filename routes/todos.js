"use strict";

const express = require("express");
let TodosController = require("../controllers/todos");
const { todoValidate, validateId } = require("../middlewares/todoValidate");
const api = express.Router();

api.get("/todos", TodosController.get);
api.post("/todos", todoValidate, TodosController.create);
//Only append if u need validate id
api.param("id", validateId);
api.get("/todos/:id", TodosController.getById);
api.put("/todos/:id", todoValidate, TodosController.update);
api.patch("/todos/:id", TodosController.updateCompleted);
api.delete("/todos/:id", TodosController.delete);
module.exports = api;
