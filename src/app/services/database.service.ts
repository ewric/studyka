import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }
   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    //await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    const name = this._storage?.get(key);
    return name;
  }
}
