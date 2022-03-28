import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Metodo } from './../models/metodo.model';

@Injectable({
  providedIn: 'root'
})
export class MetododeestudoService {

  metodoCarregado: Metodo;
  listaMetodos: Metodo[] = [
    {
      nome: 'Metodo 1',
      figuracapa: '',
      figura1: '',
      figura2: '',
      figura3: '',
      figura4: '',
      apresentacao: 'Aqui estará o texto da apresentação deste método 1.',
      comofazer: 'Aqui estará explicado como executar o método 1.',
      exemplo1: 'Aqui estará um exemplo aplicado do método 1.',
      exemplo2: '',
      color: 'primary'
    },
    {
      nome: 'Metodo 2',
      figuracapa: '',
      figura1: '',
      figura2: '',
      figura3: '',
      figura4: '',
      apresentacao: 'Aqui estará o texto da apresentação deste método 2.',
      comofazer: 'Aqui estará explicado como executar o método 2.',
      exemplo1: 'Aqui estará um exemplo aplicado do método 2.',
      exemplo2: '',
      color: 'lightred'
    },
    {
      nome: 'Metodo 3',
      figuracapa: '',
      figura1: '',
      figura2: '',
      figura3: '',
      figura4: '',
      apresentacao: 'Aqui estará o texto da apresentação deste método 3.',
      comofazer: 'Aqui estará explicado como executar o método 3.',
      exemplo1: 'Aqui estará um exemplo aplicado do método 3.',
      exemplo2: '',
      color: 'lightgreen'
    },
  ];
  constructor(private router: Router) { }


  carregaMetodo(index: number) {
    this.router.navigateByUrl('slidemetodos');
    console.log('Metodo carregado: ', this.listaMetodos[index].nome);
    this.metodoCarregado = this.listaMetodos[index];
  }

}
