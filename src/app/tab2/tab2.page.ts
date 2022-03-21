import { MeuBixinhoService } from './../services/meu-bixinho.service';
import { DatabaseService } from './../services/database.service';
import {
  Component,
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
  src = '../../assets/img/bixinho' +
  String(this.meuBixinhoService.bixinho.aparencia) +
  '_posicao1.svg';
  /*src =
    '../../assets/img/bixinho' +
    String(this.meuBixinhoService.bixinho.aparencia) +
    '_posicao1.svg';*/
  img_rotator = 0;
  temporizador: any;

  constructor(
    public alertController: AlertController,
    public databaseService: DatabaseService,
    public meuBixinhoService: MeuBixinhoService,
    ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  async ionViewDidEnter() {
    await this.meuBixinhoService.carregaDadosDoDB();
    console.log(this.meuBixinhoService.bixinho.inapetencia);
    if(this.meuBixinhoService.bixinho.diminuiInapetenciaNoDecorrerDoTempo()){
      this.alertaMorteBixinho();
    };
    console.log(this.meuBixinhoService.bixinho.inapetencia);
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
          String(this.meuBixinhoService.bixinho.aparencia) +
          '_posicao1.svg';
      }
      if (this.img_rotator === 1) {
        this.src =
          '../../assets/img/bixinho' +
          String(this.meuBixinhoService.bixinho.aparencia) +
          '_posicao2.svg';
      }

      if (this.img_rotator === 2) {
        this.src =
          '../../assets/img/bixinho' +
          String(this.meuBixinhoService.bixinho.aparencia) +
          '_posicao3.svg';
      }
      this.img_rotator++;
      if (this.img_rotator >= 3) {
        this.img_rotator = 0;
      }
    }, 700);
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
          },
        },
        {
          text: 'Ok',
          handler: (res) => {
            this.meuBixinhoService.bixinho.modificaNome(res.nome);
            console.log('Modificando nome bixinho para:',this.meuBixinhoService.bixinho.nome);
            this.meuBixinhoService.salvaDadosNoDB();
          },
        },
      ],
    });

    await alert.present();
  }

  async alertaResetaBixinho() {
    const alert1 = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'ATENÇÃO!!!!!',
      message: ("Ao clicar em ok, você estará reiniciando seu bixinho. Ele voltará ao nível 1!!"+
      " Não será possível desfazer esta alteração! Deseja continuar?"),
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (res) => {
            this.meuBixinhoService.resetaBixinho();
            this.meuBixinhoService.salvaDadosNoDB();
          },
        },
      ],
    });

    await alert1.present();
  }

  async alertaMorteBixinho() {
    const alert1 = await this.alertController.create({
      cssClass: 'meu_alertaModificarNomeBixinho',
      header: 'x(',
      message: ("SEU BIXINHO MORREU DE FOME! Mas não se preocupe, conseguimos revivê-lo! "+
      "Só que ele perdeu 2 levels e toda a experiência acumulada daquele level"),
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
          },
        },
      ],
    });

    await alert1.present();
  }

}
