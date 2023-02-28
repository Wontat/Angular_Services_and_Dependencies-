import { Component, OnInit, VERSION } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponent = 'Entered in newcomponent';

  constructor(private myservice: MyserviceService) {}

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
  }
}
