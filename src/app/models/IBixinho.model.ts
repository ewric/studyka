/* eslint-disable @typescript-eslint/naming-convention */
export class Bixinho {
  nome = "Meu Bixinho";
  inapetencia = 60; //valor em %
  felicidade = 60; //valor em %
  experiencia = 0; //valor em %
  level = 1;
  experiencia_proximo_level = 100;
  experiencia_porcentagem = this.experiencia/this.experiencia_proximo_level;
  dinheiro = 150;
  aparencia = 1;
  ultimaReducaoInapetencia: Date;

  constructor() {}

  aumentaInapetencia(comida: number){
    this.inapetencia += comida;
    if(this.inapetencia > 100)
      {this.inapetencia=100;}
  }


  diffEmHorasDeDataPassadaParaAtual(dataPassada: Date) {
    const HOURSINms = 60*60*1000;
    return Math.floor((Date.now() - Date.parse(dataPassada.toISOString())) / HOURSINms)+1;
  }


}
