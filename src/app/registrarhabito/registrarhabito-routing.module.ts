import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarhabitoPage } from './registrarhabito.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarhabitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarhabitoPageRoutingModule {}
