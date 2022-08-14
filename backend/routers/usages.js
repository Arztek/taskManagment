const { Router } = require("express");
const controller = require("../controllers/usages");

// /usages
const router = Router();

router.get("/", controller.getUsages);

module.exports = router;
