import { animal } from "../animal/animal.js";
import { animals } from "../animal/animals.js";

const animais = new animals();

export const todosAnimais = (req, res) => {
    const animais = animals.todosAnimais ();
    if(!nome || !tipo || !idade || !cor || !imagem || !vacinado){
      return res.status(201).send({massage: "Dados Inválidos", origem: "controller"});
    }
    return res.status(201).send({massage: "rota POST informçoes animais", origem: "controller"})
  };

  export const todosAnimal = (req, res) => {
    const { id } = req.params;
    
    return res.status(201).send({massage: "rota POST informçoes animais", origem: "controller"});
  }
  
  export const criarAnimal = (req, res) => {
    const { nome, tipo, idade, cor, imagem, vacinado } = req.body;
    
    if(!nome || !tipo || !idade || !cor || !imagem || !vacinado){
      return res.status(400).send({massage: "Dados Inválidos", origem: "controller"});
    }
    return res.status(201).send({massage: "rota POST informçoes animais", origem: "controller"})
  };

  export const editarAnimal = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, idade, cor, imagem, vacinado } = req.body;
    if(!nome || !tipo || !idade || !cor || !imagem || !vacinado){
      return res.status(201).send({massage: "Dados Inválidos", origem: "controller"});
    }
    return res.status(201).send({massage: "rota POST informçoes animais", origem: "controller"})
  };
    

  export const excluirAnimal = (req, res) => {
    const { id } = req.params;
  
    return res.status(201).send({massage: "rota POST informçoes animais", origem: "controller"})
  };
  