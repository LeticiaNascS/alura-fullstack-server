const { getTodosLivros, getLivroPorId, insereLivro } = require("../server/livros");

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

function postLivro(req, res){
  try{
    const livroNovo = req.body
     insereLivro(livroNovo)
    res.status(201).send("Livro Criado Com Sucesso")
  }catch(error){
   res.status(500).send("Ocorreu ao tentar criar o livro");

  }

}

module.exports = {
  getLivros,
  getLivro,
  postLivro

};
