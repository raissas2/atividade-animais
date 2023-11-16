import { v4 } from "uuid";

export class animals {
  constructor() {
    this.animal = [];
  }
  todosAnimais() {
    return this.animal;
  }
  todosAnimal() {
    return this.animal.find((animais) => animais.id == id);
  }
  criarAnimal(animais) {
    this.animal.push(animais);
  }
  editarAnimal(id, nome, tipo, idade, cor, imagem, vacinado) {
    const animais = this.getAnimalById(id);

    if (animais) {
      this.nome = nome
      this.tipo = tipo;
      this.idade = idade;
      this.cor = cor;
      this.imagem = imagem;
      this.vacinado = vacinado;
    }

    return animais;
  }
  excluirAnimal(id) {
    this.animal = this.animal.filter((animais) => animais.id !== id);
  }
}