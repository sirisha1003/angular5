import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = new BehaviorSubject<any>(['initial goal','silly goal']);
  item = this.items.asObservable();

  constructor() { }

  changeItem(item){
    this.items.next(item);
  }
    
}
