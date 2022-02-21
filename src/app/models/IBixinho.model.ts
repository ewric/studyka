/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
export class Bixinho {
  private BRINQUEDO = 0.05; //quanto que um brinquedo dá de felicidade
  private COMIDA = 0.05; //quanto que uma comida dá de felicidade
  private DINHEIRO_INICIAL = 150; //dinheiro em que se inicia o jogo
  private EXPERIENCIA_PRIMEIRO_LEVEL = 100;
  private AUMENTO_DE_EXPERIENCIA_POR_LEVEL = 40;
  CUSTO_COMIDA = 15;
  CUSTO_BRINQUEDO = 15;

  nome = "Meu Bixinho";
  inapetencia = 0.6;
  felicidade = 0.6;
  experiencia = 0;
  level = 1;
  experiencia_proximo_level = this.EXPERIENCIA_PRIMEIRO_LEVEL;
  experiencia_normalizada = (this.experiencia/this.experiencia_proximo_level);
  experiencia_porcentagem = ((this.experiencia/this.experiencia_proximo_level*100).toFixed(2));
  dinheiro = this.DINHEIRO_INICIAL;
  aparencia = 1;
  ultimaReducaoInapetencia = new Date();




  constructor() {}
//###################FUNCOES QUE AUMENTAM OU DIMINUEM ALGUMA VARIAVEL################################
  private aumentaInapetencia(aumento: number) {
    this.inapetencia += aumento;
    if(this.inapetencia >= 1) this.inapetencia = 1;
  }
  private aumentaFelicidade(aumento: number) {
    this.felicidade += aumento;
    if(this.felicidade >= 1) this.felicidade = 1;
    this.aumentaExperiencia();
  }
  private aumentaDinheiro() {
    this.dinheiro += Math.round(Math.random()*10 + 10);
  }
  private diminuiInapetencia(diminuicao: number) {
    this.inapetencia -= diminuicao;
    if(this.inapetencia <= 0) this.morte();
  }
  private diminuiFelicidade(diminuicao: number) {
    this.felicidade -= diminuicao;
    if(this.felicidade<= 0) this.felicidade = 0;
  }




//###################FUNCOES RELACIONADAS A LEVEL################################
  private aumentaExperiencia() {
    if(this.inapetencia >= 0.5 && this.felicidade >= 0.5) {
      this.experiencia += Math.round(Math.random()*10)+10;
      this.atualizaExperiencia();
    }
    if(this.experiencia>=this.experiencia_proximo_level) this.passouDeLevel();
  }
  private atualizaExperiencia() {
    this.experiencia_normalizada = (this.experiencia/this.experiencia_proximo_level);
    this.experiencia_porcentagem = ((this.experiencia/this.experiencia_proximo_level*100).toFixed(2));
  }
  private atualizaExperienciaProximoLevel() {
    this.experiencia_proximo_level = this.EXPERIENCIA_PRIMEIRO_LEVEL +
    this.level*this.AUMENTO_DE_EXPERIENCIA_POR_LEVEL;
  }
  private passouDeLevel() {
    this.level += 1;
    this.experiencia = 0;
    this.atualizaExperienciaProximoLevel();
    this.atualizaExperiencia();
  }
  private morte() {
    this.inapetencia = 0.6;
    this.felicidade = 0.6;
    this.experiencia = 0;
    this.atualizaExperienciaProximoLevel();
    if(this.level <= 0){
      this.level = 1;
      //this.ultimaReducaoInapetencia = Date();
      this.dinheiro = 150;
      this.experiencia_proximo_level = 100;
    }
  }



//###################FUNCOES DE HABITOS################################
  bomHabito() {
    this.aumentaFelicidade(Math.random()/20);
    this.aumentaDinheiro();
    this.aumentaExperiencia();
  }
  mauHabito() {
    this.felicidade -= Math.round(Math.random()*8+2)/100;
    if(this.felicidade <= 0) this.felicidade = 0;
  }






//###################COMPRA DE ITENS################################
  comprouBrinquedo() {
    if(this.dinheiro-this.CUSTO_BRINQUEDO >= 0) {
      this.aumentaFelicidade(this.BRINQUEDO);
      this.dinheiro -= this.CUSTO_BRINQUEDO;
    }
  }

  comprouComida() {
    if(this.dinheiro-this.CUSTO_COMIDA >= 0) {
      this.aumentaInapetencia(this.COMIDA);
      this.dinheiro -= this.CUSTO_COMIDA;
    }
  }


//###################FUNCOES RELACIONADAS COM TEMPO################################
  private diffEmHorasDeDataPassadaParaAtual(dataPassada: Date) {
    const HOURSINms = 60*1000;//60*60*1000;
    return Math.floor((Date.now() - Date.parse(dataPassada.toISOString())) / HOURSINms);
  }
  diminuiInapetenciaNoDecorrerDoTempo() {
    if(this.diffEmHorasDeDataPassadaParaAtual(this.ultimaReducaoInapetencia) >= 1){
      const diffEmHoras = this.diffEmHorasDeDataPassadaParaAtual(this.ultimaReducaoInapetencia);
      this.diminuiInapetencia(10*diffEmHoras/100);
      this.diminuiFelicidade(10*diffEmHoras/100);
      this.ultimaReducaoInapetencia = new Date();
    }
  }

  verData() {
    console.log(this.ultimaReducaoInapetencia);
    console.log(Date());
    const horasPassadas = this.diffEmHorasDeDataPassadaParaAtual(this.ultimaReducaoInapetencia);
    console.log(horasPassadas);
  }

}
