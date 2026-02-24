const { getTodosLivros, getLivroPorId } = require("../server/livros");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor");
  }
}

function getLivro(req,res){
     try {
    const id =  req.params.id
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500).send("Ocorreu um erro no servidor");
  }
}

module.exports = {
  getLivros,
  getLivro
};
