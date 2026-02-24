const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("olá mundo let linda");
});

module.exports = router;
