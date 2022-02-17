export class Bixinho {
  nome = "Meu Bixinho";
  inapetencia = 60; //valor em %
  felicidade = 60; //valor em %
  experiencia = 0; //valor em %
  level = 1;
  experiencia_proximo_level = 100;
  experiencia_porcentagem = experiencia/this.experiencia_proximo_level;
  dinheiro = 150;

  constructor() {}

  aumentaInapetencia(number: comida){
    this.inapetencia += comida;
    if(this.inapetencia > 100)
      {this.inapetencia=100;}
  }




}
