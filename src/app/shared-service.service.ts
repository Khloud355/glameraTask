import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  firstpage: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }
}
