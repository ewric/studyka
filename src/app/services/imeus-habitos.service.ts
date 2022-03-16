import { Injectable } from '@angular/core';
import { Habito } from '../models/IHabito.model';

@Injectable({
  providedIn: 'root'
})
export class IMeusHabitosService  {
  listaHabitos: Habito[] = [];

  constructor() { }

  ordenaHabitosPorData() {
    this.listaHabitos.sort(function(a, b) {
      return Date.parse(a.data.toISOString()) - Date.parse(b.data.toISOString());
    });
  }


}

