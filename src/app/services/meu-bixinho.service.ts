import { DatabaseService } from './database.service';
import { Bixinho } from './../models/IBixinho.model';
/* eslint-disable @typescript-eslint/naming-convention */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeuBixinhoService {
  bixinho = new Bixinho();
  constructor(private databaseService: DatabaseService) {}

  carregaBixinhoDB(aux: any) {
    if (aux) {
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
      console.log('Propriedades do bixinho atualizadas!');
    }

  }

  public salvaDadosNoDB() {
    this.databaseService.set('bixinho', this.bixinho);
    console.log('Bixinho salvo no DB!');
  }

  public async carregaDadosDoDB() {
    const aux = await this.databaseService.get('bixinho');
    this.carregaBixinhoDB(aux);
    console.log('Bixinho carregado do DB!');
    return 1;
  }

  resetaBixinho() {
    this.bixinho = new Bixinho();
    this.salvaDadosNoDB();
    console.log('Bixinho resetado!');
  }
}
