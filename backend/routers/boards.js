const { Router } = require("express");
const controller = require("../controllers/boards");

// /boards
const router = new Router();

router.post("/", controller.addBoard);
router.delete("/:id", controller.removeBoard);
router.get("/:id/tasks", controller.getTasks);

module.exports = router;
