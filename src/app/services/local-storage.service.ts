import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }
  public getItem(key: string){
    return JSON.parse(localStorage.getItem(key));
  }
  clearItem(){
    localStorage.clear();
  }
}
