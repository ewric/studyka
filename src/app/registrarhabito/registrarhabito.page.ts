import { AlertController } from '@ionic/angular';
import { IMeusHabitosService } from './../services/imeus-habitos.service';
import { Component, OnInit } from '@angular/core';
import { Habito } from '../models/IHabito.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarhabito',
  templateUrl: './registrarhabito.page.html',
  styleUrls: ['./registrarhabito.page.scss'],
})
export class RegistrarhabitoPage implements OnInit {

  public data: string;
  public habito = new Habito();
  constructor(
    private iMeusHabitosService: IMeusHabitosService,
    private router: Router,
    private alertController: AlertController) {}


  ngOnInit() {
  }


  guardarHabito() {
    this.habito.data = new Date(this.data);
    if(this.habito.texto && Date.parse(this.habito.data.toDateString())) {
      this.iMeusHabitosService.listaHabitos.push(this.habito);
      console.log('Novo habito registrado: ',this.habito);
      this.habito = new Habito();
      this.router.navigateByUrl('tabs/tab3');
      this.iMeusHabitosService.salvaHabitosNoDB();
    }
    else{
      this.alertaFaltouTextoOuDataNoNovoHabito();
    }
  }

  async alertaFaltouTextoOuDataNoNovoHabito() {
    const alert1 = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'ERRO!!!!!',
      message: ("Faltou preencher o texto ou a data!!!"),
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
          },
        },
      ],
    });
    await alert1.present();
  }

}
