import { Habito } from './../models/IHabito.model';
import { Component, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  listaHabitos: Habito[] = [
    {
      texto: "Estudar",
      tipo: true
    },
    {
      texto: "Jogar bola",
      tipo: false
    },
    {
      texto: "Fazer exercicios",
      tipo: true
    },
    {
      texto: "Dormir tarde",
      tipo: false
    },
    {
      texto: "Dormir cedo",
      tipo: true
    },
  ];
  constructor() {}

  doReorder(ev) {
    console.log(ev);
    //const itemMoved = this.listaHabitos.splice(ev.detail.from,1)[0];
    //this.listaHabitos.splice(ev.detal.to, 0, itemMoved);
    ev.detail.complete();
  }
}
