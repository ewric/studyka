import { IMeusHabitosService } from './../services/imeus-habitos.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  registronovapagina = '../../registrarhabito';
  constructor(public iMeusHabitosService: IMeusHabitosService,private alertController: AlertController) {}



  ngOnInit() {
    this.organizaDatas();
  }


  organizaDatas() {
    this.iMeusHabitosService.ordenaHabitosPorData();
  }

  verificaData(habito: any) {
    console.log(habito);
    console.log(Date.now() - Date.parse(habito.data.toISOString()));
    if((Date.parse(habito.data.toISOString()) - Date.now()) > 0){
      return 1;
    }

    return 0;
  }
}
