import express from "express";
import LivroController from "../livroControler.js";

const routes = express.Router(); 

routes.get( "/Livros", LivroController.listarLivros);
routes.get( "/Livros/busca", LivroController.listarLivrosPorEditora);
routes.get( "/Livros/:id", LivroController.listarLivrosPorId);
routes.post( "/Livros", LivroController.cadastrarLivro);
routes.put( "/Livros/:id", LivroController.atualizarLivro);
routes.delete( "/Livros/:id", LivroController.deletarLivro);


export default routes;
