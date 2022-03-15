import { MeuBixinhoService } from './services/meu-bixinho.service';
import { IMeusHabitosService } from './services/imeus-habitos.service';
import { DatabaseService } from './services/database.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    IonicStorageModule.forRoot({
      driverOrder: [Drivers.IndexedDB, cordovaSQLiteDriver._driver]
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatabaseService, IMeusHabitosService, MeuBixinhoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
