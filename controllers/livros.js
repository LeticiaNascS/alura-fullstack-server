const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivros } = require("../server/livros");

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

function patchLivro (req,res){
  try{
    const id = Number(req.params.id)
    const body = req.body

    modificaLivro(body, id)
    res.status(200).send("Item Modificado Com Sucesso")
  }catch(error){
    res.status(500).send("Erro ao tentar atualizar")
  }
}

function deletaLivros(req,res){
    try{
    const id = Number(req.params.id)

    excluiLivros(id)
    res.status(200).send("Livro excluido com sucesso")
  }catch(error){
    res.status(500).send("Erro ao tentar excluir")
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deletaLivros

};
