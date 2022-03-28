import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidemetodosPageRoutingModule } from './slidemetodos-routing.module';

import { SlidemetodosPage } from './slidemetodos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidemetodosPageRoutingModule
  ],
  declarations: [SlidemetodosPage]
})
export class SlidemetodosPageModule {}
