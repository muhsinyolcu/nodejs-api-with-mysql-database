const router = require("express").Router();

const { index } = require("../controllers/index.controller");

router.get("/", index);
router.post("/", index);

module.exports = router;
