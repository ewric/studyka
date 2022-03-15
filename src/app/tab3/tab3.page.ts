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
}
