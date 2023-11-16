import { Router } from "express";
import { 
    todosAnimal, 
    todosAnimais, 
    criarAnimal, 
    editarAnimal, 
    excluirAnimal } from "../controllers/animais.controllers.js";

const rotaAnimais = Router();

rotaAnimais.get ("/", todosAnimais);
rotaAnimais.get ("/:id", todosAnimal);
rotaAnimais.post ("/", criarAnimal);
rotaAnimais.put ("/:id", editarAnimal);
rotaAnimais.delete("/:id", excluirAnimal );

export default rotaAnimais;