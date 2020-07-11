import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private darkMode: boolean = false;

  constructor() { 
    
  }

  getDarkMode() {
    return this.darkMode;
  }

  toggleDarkMode(res) {
    this.darkMode = res;
  }
}
