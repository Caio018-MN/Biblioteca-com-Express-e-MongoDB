import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import conectaNaDatabase from "./config/dbconnect.js";
import routes from "./controllers/routes/livrosRoutes.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
app.use(routes);


app.delete("/livros/:id", (req, res) => {
  const index = buscalivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;
