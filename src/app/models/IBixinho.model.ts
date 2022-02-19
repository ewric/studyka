/* eslint-disable @typescript-eslint/naming-convention */
export class Bixinho {
  nome = "Meu Bixinho";
  inapetencia = 0.6;
  felicidade = 0.6;
  experiencia = 50;
  level = 1;
  experiencia_proximo_level = 100;
  experiencia_normalizada = (this.experiencia/this.experiencia_proximo_level);
  experiencia_porcentagem = ((this.experiencia/this.experiencia_proximo_level*100).toFixed(2));
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
