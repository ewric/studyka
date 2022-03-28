import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'registrarhabito',
    loadChildren: () => import('./registrarhabito/registrarhabito.module').then( m => m.RegistrarhabitoPageModule)
  },
  {
    path: 'slidemetodos',
    loadChildren: () => import('./slidemetodos/slidemetodos.module').then( m => m.SlidemetodosPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
