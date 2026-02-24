const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deletaLivros,
} = require("../controllers/livros");
const router = Router();

router.get("/", getLivros);

router.get("/:id", getLivro);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deletaLivros);

module.exports = router;
