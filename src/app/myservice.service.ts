import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  cosntructor() {}
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
}
