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
  constructor(private iMeusHabitosService: IMeusHabitosService, private router: Router) {}


  ngOnInit() {
  }


  guardarHabito() {
    this.habito.data = new Date(this.data);
    if(this.habito.texto) {
      this.iMeusHabitosService.listaHabitos.push(this.habito);
    }
    console.log(this.iMeusHabitosService.listaHabitos);
    this.habito = new Habito();
    this.router.navigateByUrl('tabs/tab3');

  }

  ajustarData() {

  }

}
