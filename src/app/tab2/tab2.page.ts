import { DatabaseService } from './../services/database.service';
import { Bixinho } from './../models/IBixinho.model';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  bixinho = new Bixinho();
  src =
    '../../assets/img/bixinho' +
    String(this.bixinho.aparencia) +
    '_posicao1.svg';
  img_rotator = 0;
  temporizador: any;

  constructor(
    public alertController: AlertController,
    public databaseService: DatabaseService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  ionViewDidEnter() {
    this.carregaDadosDoDB().then(() => {
      this.bixinho.diminuiInapetenciaNoDecorrerDoTempo();
    });
    this.construtorDoGiff();
  }

  ionViewDidLeave() {
    clearInterval(this.temporizador);
  }

  public construtorDoGiff() {
    this.temporizador = setInterval(() => {

      if (this.img_rotator === 0) {
        this.src =
          '../../assets/img/bixinho' +
          String(this.bixinho.aparencia) +
          '_posicao1.svg';
      }
      if (this.img_rotator === 1) {
        this.src =
          '../../assets/img/bixinho' +
          String(this.bixinho.aparencia) +
          '_posicao2.svg';
      }

      if (this.img_rotator === 2) {
        this.src =
          '../../assets/img/bixinho' +
          String(this.bixinho.aparencia) +
          '_posicao3.svg';
      }
      this.img_rotator++;
      if (this.img_rotator >= 3) {
        this.img_rotator = 0;
      }
    }, 700);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async alertaModificarNomeBixinho() {
    const alert = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'Renomear o bixinho:',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Novo nome do bixinho',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (res) => {
            console.log('Confirm Ok');
            console.log(res);
            this.bixinho.nome = res.nome;
          },
        },
      ],
    });

    await alert.present();
  }

  public salvaDadosNoDB() {
    this.databaseService.set('bixinho', this.bixinho);
  }

  public async carregaDadosDoDB() {
    const aux = await this.databaseService.get('bixinho');
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
    return 1;
  }
}
