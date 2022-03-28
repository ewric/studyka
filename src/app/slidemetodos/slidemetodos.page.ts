import { MetododeestudoService } from './../services/metododeestudo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidemetodos',
  templateUrl: './slidemetodos.page.html',
  styleUrls: ['./slidemetodos.page.scss'],
})
export class SlidemetodosPage implements OnInit {

  constructor(public metododeestudoService: MetododeestudoService) { }

  ngOnInit() {

  }



}
