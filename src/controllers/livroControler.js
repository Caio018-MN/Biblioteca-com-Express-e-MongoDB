// Importando o modelo de livro
import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

// Controller responsável por gerenciar as requisições relacionadas aos livros
class LivroController {
  static async listarLivros(req, res) {
    try{
       const listaLivros = await livro.find({});
       res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({message: '${erro.message} - falha na requisição'});

    }
   
  };

  // Método para buscar um livro pelo ID
   static async listarLivrosPorId(req, res) {
    try{
       const id = req.params.id;
       const livroEncontrado = await livro.findById(id);
       res.status(200).json(livroEncontrado);
    } catch (error) {
      res.status(500).json({message: '${erro.message} - falha na requisição'});
    }
   
  };

  // Método para cadastrar um novo livro
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorencontrado = await livro.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorencontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", Livro: novoLivro });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  // Método para atualizar um livro existente 
   static async atualizarLivro(req, res) {
    try{
       const id = req.params.id;
       await livro.findByIdAndUpdate(id, req.body);
       res.status(200).json({message: 'Livro atualizado '});
    } catch (error) {
      res.status(500).json({message: '${erro.message} - falha na atualização'});
    }
   
  };

  // Método para excluir um livro existente
 static async deletarLivro(req, res) {
    try{
       const id = req.params.id;
       await livro.findByIdAndDelete(id);
       res.status(200).json({message: 'Livro deletado '});
    } catch (error) {
      res.status(500).json({message: '${erro.message} - falha ao deletar'});
    }
   
  };

 static async listarLivrosPorEditora(req, res) {
   const editora = req.query.editora;
    try {
      const LivroPorEditora = await livro.find({editora: editora});
      res.status(200).json(LivroPorEditora);
      res.status(500).json({message: '${erro.message} - falha na busca'});
    } catch (error) {


   }

  };

}; 
export default LivroController;
