import { DatabaseService } from './database.service';
import { Injectable, OnInit } from '@angular/core';
import { Habito } from '../models/IHabito.model';

@Injectable({
  providedIn: 'root'
})
export class IMeusHabitosService  {
  listaHabitos: Habito[] = [];

  constructor(public databaseService: DatabaseService) { }

  ordenaHabitosPorData() {
    console.log(this.listaHabitos);
    this.listaHabitos.sort((a, b) => Date.parse(a.data.toISOString()) - Date.parse(b.data.toISOString()));
    console.log(this.listaHabitos);
  }

  public salvaHabitosNoDB() {
    this.databaseService.set('listahabitos', this.listaHabitos);
  }

  public async carregaHabitosDoDB() {
    const aux = await this.databaseService.get('listahabitos');
    if(aux){
      this.listaHabitos = aux;
    }
    this.ordenaHabitosPorData();
    return 1;
  }

  deletaHabito(index: number) {
    console.log('deletar de lista habitos o index',index);
    this.listaHabitos.splice(index,1);
    this.salvaHabitosNoDB();
  }
}

