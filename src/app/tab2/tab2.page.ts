import { Bixinho } from './../models/IBixinho.model';
import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

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


  constructor(public alertController: AlertController) {}

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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async alertaModificarNomeBixinho() {
    const alert = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'Renomear o bixinho:',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Novo nome do bixinho'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (res) => {
            console.log('Confirm Ok');
            console.log(res);
            this.bixinho.nome = res.nome;
          }
        }
      ]
    });

    await alert.present();
  }

}
