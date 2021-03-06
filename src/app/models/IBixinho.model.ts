

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
export class Bixinho {
  private INAPETENCIA_INICIAL = 0.6;
  private FELICIDADE_INICIAL = 0.6;
  private BRINQUEDO = 0.07; //quanto que um brinquedo dá de felicidade
  private COMIDA = 0.05; //quanto que uma comida dá de felicidade
  private FELICIDADE_BOM_HABITO = 0.1; //quanto de felicidade aumenta praticando bom habito (random*this)
  private FELICIDADE_MAU_HABITO = 0.1; //quanto de felicidade diminui praticando mau habito (random*this)
  private DINHEIRO_INICIAL = 150; //dinheiro em que se inicia o jogo
  private DINHEIRO_BOM_HABITO = 30; //quanto de dinheiro se ganha praticando bom habito
  private EXPERIENCIA_BOM_HABITO = 20; //quanto de exp se ganha praticando bom habito (random*this)
  private EXPERIENCIA_PRIMEIRO_LEVEL = 100;
  private AUMENTO_DE_EXPERIENCIA_POR_LEVEL = 20;
  CUSTO_COMIDA = 15;
  CUSTO_BRINQUEDO = 15;

  nome = "Meu_Bixinho";
  inapetencia = this.INAPETENCIA_INICIAL;
  felicidade = this.FELICIDADE_INICIAL;
  experiencia = 0;
  level = 1;
  experiencia_proximo_level = this.EXPERIENCIA_PRIMEIRO_LEVEL;
  experiencia_normalizada = (this.experiencia/this.experiencia_proximo_level);
  experiencia_porcentagem = ((this.experiencia/this.experiencia_proximo_level*100).toFixed(2));
  dinheiro = this.DINHEIRO_INICIAL;
  aparencia = 1;
  ultimaReducaoInapetencia = new Date();




  constructor() {}

  public modificaNome(nome: string) {
    this.nome = nome;
  }

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
    this.dinheiro += Math.round(Math.random()*this.DINHEIRO_BOM_HABITO);
  }
  private diminuiInapetencia(diminuicao: number) {
    this.inapetencia -= diminuicao;
    if(this.inapetencia <= 0) this.inapetencia = 0;
  }
  private diminuiFelicidade(diminuicao: number) {
    this.felicidade -= diminuicao;
    if(this.felicidade<= 0) this.felicidade = 0;
  }




//###################FUNCOES RELACIONADAS A LEVEL################################
  private aumentaExperiencia() {
    if(this.inapetencia >= 0.5 && this.felicidade >= 0.5) {
      this.experiencia += Math.round(Math.random()*this.EXPERIENCIA_BOM_HABITO);
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
    this.inapetencia = this.INAPETENCIA_INICIAL;
    this.felicidade = this.FELICIDADE_INICIAL;
    this.experiencia = 0;
    this.level -= 2;
    this.atualizaExperienciaProximoLevel();
    if(this.level <= 0){
      this.level = 1;
      //this.ultimaReducaoInapetencia = Date();
      this.dinheiro = this.DINHEIRO_INICIAL;
      this.experiencia_proximo_level = this.EXPERIENCIA_PRIMEIRO_LEVEL;
    }
    this.atualizaExperiencia();
    console.log("Bixinho morreu!");
  }



//###################FUNCOES DE HABITOS################################
  bomHabito() {
    this.aumentaFelicidade(Math.random()*this.FELICIDADE_BOM_HABITO);
    this.aumentaDinheiro();
    this.aumentaExperiencia();
  }
  mauHabito() {
    this.diminuiFelicidade(Math.random()*this.FELICIDADE_MAU_HABITO);
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
    const HOURSINms = 60*60*1000;
    return Math.abs(Math.floor((Date.now() - Date.parse(dataPassada.toISOString())) / HOURSINms));
  }


  diminuiInapetenciaNoDecorrerDoTempo() {
    let flag_morte = 0;
    const diffEmHoras = this.diffEmHorasDeDataPassadaParaAtual(this.ultimaReducaoInapetencia);
    if(diffEmHoras >= 1){
      console.log('Inapetencia antes da atualizacao: ',this.inapetencia);
      this.diminuiInapetencia(diffEmHoras/100);
      this.diminuiFelicidade(diffEmHoras/100);
      if(this.inapetencia <= 0) {this.morte(); flag_morte = 1;}
      this.ultimaReducaoInapetencia = new Date();
      console.log('Quantidade de horas sem entrar:',diffEmHoras);
      console.log('Inapetencia depois da atualizacao: ', this.inapetencia);
    }
    return flag_morte;
  }

  verData() {
    const horasPassadas = this.diffEmHorasDeDataPassadaParaAtual(this.ultimaReducaoInapetencia);
    console.log(horasPassadas);
  }

  passar1Dia() {
    this.diminuiInapetencia(24/100);
    this.diminuiFelicidade(24/100);
  }
}
