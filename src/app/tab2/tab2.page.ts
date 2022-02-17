import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bixinho = 1; //esta linha indica o bixinho escolhido. Futuramente
  //iremos buscar este valor da classe em uma variavel chamada aparencia.
  src = "../../assets/img/bixinho"+String(this.bixinho)+"_posicao1.svg";
  img_rotator = 0;
  temporizador: any;


  constructor() {}
  ngOnInit() {
    this.temporizador = setInterval(() =>{

      if(this.img_rotator===0)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho)+"_posicao1.svg";}
      if(this.img_rotator===1)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho)+"_posicao2.svg";}
      if(this.img_rotator===2)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho)+"_posicao3.svg";}
      this.img_rotator++;
      if(this.img_rotator>=3)
        {this.img_rotator=0;}
    }, 700);
  }

  ngOnDestroy() {
    clearInterval(this.temporizador);
  }

}
