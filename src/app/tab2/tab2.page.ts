import { Bixinho } from './../models/IBixinho.model';
import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bixinho = new Bixinho;
  src = "../../assets/img/bixinho"+String(this.bixinho.aparencia)+"_posicao1.svg";
  img_rotator = 0;
  temporizador: any;

  ultimoAcesso = new Date(2022,0,18);
  diffDias: number;


  constructor() {}

  ngOnInit() {
    this.temporizador = setInterval(() =>{
      this.bixinho.diminuiInapetenciaNoDecorrerDoTempo();
      if(this.img_rotator===0)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho.aparencia)+"_posicao1.svg";}
      if(this.img_rotator===1)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho.aparencia)+"_posicao2.svg";}
      if(this.img_rotator===2)
        {this.src = "../../assets/img/bixinho"+String(this.bixinho.aparencia)+"_posicao3.svg";}
      this.img_rotator++;
      if(this.img_rotator>=3)
        {this.img_rotator=0;}
    }, 700);
  }

  ngOnDestroy() {
    clearInterval(this.temporizador);
  }


}
