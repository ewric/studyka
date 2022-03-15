import { Injectable } from '@angular/core';
import { Habito } from '../models/IHabito.model';

@Injectable({
  providedIn: 'root'
})
export class IMeusHabitosService  {
  listaHabitos: Habito[] = [
    {
      texto: 'comer',
      data: new Date(2022,3,22),
    },
    {
      texto: 'beber água',
      data: new Date(2022,3,18),
    },
    {
      texto: 'jogar',
      data: new Date(2022,3,10),
    },
    {
      texto: 'estudar',
      data: new Date(2022,2,14),
    }
  ];

  constructor() { }

  ordenaHabitosPorData() {
    this.listaHabitos.sort(function(a, b) {
      return Date.parse(a.data.toISOString()) - Date.parse(b.data.toISOString());
    });
  }


}

