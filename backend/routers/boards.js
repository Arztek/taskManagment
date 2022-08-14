const { Router } = require("express");
const controller = require("../controllers/boards");

// /boards
const router = new Router();

router.post("/", controller.addBoard);
router.delete("/:id", controller.removeBoard);
router.get("/:id", controller.getBoard);
router.get("/byUser/:id", controller.getBoardsByUser);

module.exports = router;
