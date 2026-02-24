const { Router } = require("express");
const { getLivros, getLivro, postLivro } = require("../controllers/livros");
const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/",postLivro)

router.put("/", (req, res) => {
  res.send("Você fez um PUT para /livros");
});

router.delete("/", (req, res) => {
  res.send("Você fez um DELETE para /livros");
});

module.exports = router;
