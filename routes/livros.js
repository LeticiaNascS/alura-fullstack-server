const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  try {
    res.send("olá mundo let linda");
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor");
  }
});

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
