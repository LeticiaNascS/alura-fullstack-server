const express = require("express");
const livrosRouter = require("./routes/livros");
const app = express();
const port = 8000;

app.use(express.json())

app.use("/livros", livrosRouter);

app.listen(port, () => {
  console.log(`Escutando na porta${port}`);
});
