//const { Op } = require("sequelize");

const { todos } = require("../models");

//const { ERROR_UPLOADING_SERVICE_EVIDENCE } = require("../common/errors");

// TODO: Clean Exceptions
class TodoController {
  static async get(req, res, next) {
    try {
      let todosResults = await todos.findAll({
        order: [["id", "desc"]],
        raw: true,
      });
      return res.json({ todosResults });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static async getById(req, res, next) {
    try {
      const { id } = req.params;
      let todo = await todos.findOne({
        where: { id },
      });

      return res.json({ todo });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static async create(req, res, next) {
    try {
      const { description, title } = req.body;
      const completed = false;
      const todo = await todos.create({
        description,
        title,
        completed,
      });
      return res.status(200).json({ todo });
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static async update(req, res, next) {
    try {
      const {
        params: { id },
        body: { description, title, completed },
      } = req;

      let todo = await todos.findOne({
        where: { id },
      });
      if (!todo) {
        return res.status(404).json({ error: "todo not found" });
      }
      todo.description = description;
      todo.title = title;
      if (typeof completed === "boolean") {
        todo.completed = completed;
      }
      await todo.save();
      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static async updateCompleted(req, res, next) {
    try {
      const {
        params: { id },
        body: { completed },
      } = req;
      if (typeof completed !== "boolean") {
        return res
          .status(422)
          .json({ error: "completed cannot be null & must be boolean" });
      }
      let todo = await todos.findOne({
        where: { id },
      });
      if (!todo) {
        return res.status(404).json({ error: "todo not found" });
      }
      todo.completed = completed;

      await todo.save();
      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      await todos.destroy({
        where: {
          id,
        },
        force: true,
      });
      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({ error: err.stack });
    }
  }
}

module.exports = TodoController;
