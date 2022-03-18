
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
  constructor(public iMeusHabitosService: IMeusHabitosService, private alertController: AlertController) {}




  ionViewDidEnter() {
    this.iMeusHabitosService.carregaHabitosDoDB();
    this.organizaDatas();
  }


  organizaDatas() {
    this.iMeusHabitosService.ordenaHabitosPorData();
  }

  verificaData(habito: any) {
    if((Date.parse(habito.data.toISOString()) - Date.now()) > 0){
      return 1;
    }
    return 0;
  }


}
