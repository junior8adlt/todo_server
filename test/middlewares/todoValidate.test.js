module.exports = {
  todoValidate(req, res, next) {
    const { description, title, completed = null } = req.body;
    if (
      !description ||
      typeof description !== "string" ||
      !description.trim()
    ) {
      return res
        .status(422)
        .json({
          error: "description cannot be null, empty and must be string",
        });
    }
    if (!title || typeof title !== "string" || !title.trim()) {
      return res
        .status(422)
        .json({ error: "title cannot be null, empty and must be string" });
    }
    if (completed !== null && typeof completed !== "boolean") {
      return res.status(422).json({ error: "completed must be boolean" });
    }
    return next();
  },
  validateId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) {
      return res.status(422).json({ error: "id must be number" });
    }
    return next();
  },
};
