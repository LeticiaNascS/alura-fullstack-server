const { getTodosLivros } = require("../server/livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor");
  }
}

module.exports = {
  getLivros,
};
