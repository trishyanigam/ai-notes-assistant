const express = require("express");
const router = express.Router();
const { testAI,summarize, improve, title, bullets, chat } = require("../controllers/aiController");

router.post("/test",testAI);
router.post("/summarize",summarize);
router.post("/improve",improve);
router.post("/title",title);
router.post("/bullets",bullets);
router.post("/chat",chat);

module.exports = router;