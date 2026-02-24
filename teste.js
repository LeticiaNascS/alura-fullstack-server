const fs = require("fs");
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const novoDado = {
  id: 1,
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1955,
};
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado])); //fs.write significa que o arquivo será reescrito, ou seja, os dados atuais serão apagados e substituídos pelo novo dado. Stringify é necessário para converter o array de objetos em uma string JSON, que é o formato esperado pelo método writeFileSync. O operador spread (...) é usado para criar um novo array que contém todos os elementos do array dadosAtuais, seguido pelo novoDado, garantindo que os dados existentes sejam mantidos e o novo dado seja adicionado ao final do array.

console.log(JSON.parse(fs.readFileSync("livros.json")));
