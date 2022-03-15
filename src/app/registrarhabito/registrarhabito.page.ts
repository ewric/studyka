import { Component, OnInit } from '@angular/core';
import { Habito } from '../models/IHabito.model';

@Component({
  selector: 'app-registrarhabito',
  templateUrl: './registrarhabito.page.html',
  styleUrls: ['./registrarhabito.page.scss'],
})
export class RegistrarhabitoPage implements OnInit {

  public habito= new Habito();
  constructor() {}


  ngOnInit() {
  }

  mostraTexto() {
    console.log(this.habito);
  }

}
