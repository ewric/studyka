import { Bixinho } from './../models/IBixinho.model';
/* eslint-disable @typescript-eslint/naming-convention */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuBixinhoService {
  public bixinho: Bixinho;
  constructor() {}

  carregaBixinhoDB(aux: any) {
    if (aux != null) {
      this.bixinho.aparencia = aux.aparencia;
      this.bixinho.dinheiro = aux.dinheiro;
      this.bixinho.experiencia = aux.experiencia;
      this.bixinho.nome = aux.nome;
      this.bixinho.experiencia_normalizada = aux.experiencia_normalizada;
      this.bixinho.experiencia_porcentagem = aux.experiencia_porcentagem;
      this.bixinho.experiencia_proximo_level = aux.experiencia_proximo_level;
      this.bixinho.felicidade = aux.felicidade;
      this.bixinho.inapetencia = aux.inapetencia;
      this.bixinho.level = aux.level;
      this.bixinho.nome = aux.nome;
      this.bixinho.ultimaReducaoInapetencia = aux.ultimaReducaoInapetencia;
      console.log('Bixinho carregado!');
    }

  }


  resetaBixinho() {
    this.bixinho = new Bixinho;
  }
}
