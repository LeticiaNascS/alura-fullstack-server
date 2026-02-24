const { Router } = require("express");
const { getLivros } = require("../controllers/livros");
const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  res.send("Você fez um POST para /livros");
});

router.put("/", (req, res) => {
  res.send("Você fez um PUT para /livros");
});

router.delete("/", (req, res) => {
  res.send("Você fez um DELETE para /livros");
});

module.exports = router;
