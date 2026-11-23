import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//import http from "http";
import app from "./src/app.js";


const PORT = 3000;

const rotas = {
  "/": "trabalho de node.js",
  "/livros ": "Entrei na rota de livros",
  "/autores": "Entrei na rota autores",
};


app.listen(PORT, () => {
  console.log("Servidor escutando!");
});

