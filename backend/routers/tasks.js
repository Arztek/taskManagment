const { Router } = require("express");
const controller = require("../controllers/tasks");

// /tasks
const router = new Router();

router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);
router.get("/:id", controller.getTask);
router.get("/byBoard/:id", controller.getTasksByBoard);

module.exports = router;
