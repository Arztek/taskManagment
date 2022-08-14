const { Router } = require("express");
const controller = require("../controllers/users");

// /users
const router = Router();

router.post("/", controller.addUser);
router.delete("/:id", controller.removeUser);
router.get("/:id/boards", controller.getBoards);

module.exports = router;
