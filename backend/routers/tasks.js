const { Router } = require("express");
const controller = require("../controllers/tasks");

// /boards
const router = new Router();

router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);

module.exports = router;
