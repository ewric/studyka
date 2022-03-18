import { Bixinho } from './../models/IBixinho.model';
import { MeuBixinhoService } from './../services/meu-bixinho.service';

import { IMeusHabitosService } from './../services/imeus-habitos.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  registronovapagina = '../../registrarhabito';
  indexOfelement: number;
  constructor(
    public iMeusHabitosService: IMeusHabitosService,
     private alertController: AlertController,
     private meuBixinhoService: MeuBixinhoService,
  ) {}




  ionViewDidEnter() {
    this.iMeusHabitosService.carregaHabitosDoDB();
    this.organizaDatas();
  }


  organizaDatas() {
    this.iMeusHabitosService.ordenaHabitosPorData();
  }

  verificaData(habito: any) {
    if((Date.parse(habito.data.toISOString()) + 24*60*60*1000 - Date.now()) > 0){
      return 1;
    }
    return 0;
  }


  async alertaHabitoFeito(index: number) {
    const alert1 = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'Confirmar realização de tarefa!',
      message: (""),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (res) => {
            if (this.verificaData(this.iMeusHabitosService.listaHabitos[index])){
              this.meuBixinhoService.bixinho.bomHabito();
              console.log('Terminou tarefa em tempo habil!');
            }
            else{
              this.meuBixinhoService.bixinho.mauHabito();
              console.log('Tarefa atrasada!');
            }
            this.iMeusHabitosService.deletaHabito(index);
            this.meuBixinhoService.salvaDadosNoDB();
          },
        },
      ],
    });

    await alert1.present();
  }
}
