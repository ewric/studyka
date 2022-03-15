import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarhabitoPageRoutingModule } from './registrarhabito-routing.module';

import { RegistrarhabitoPage } from './registrarhabito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarhabitoPageRoutingModule
  ],
  declarations: [RegistrarhabitoPage]
})
export class RegistrarhabitoPageModule {}
