import { Component, OnInit } from '@angular/core';
import { IUser } from 'remora-lib/models/user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

  userDetails(userDetails: IUser) {
    console.log('userDetails received from library: ', userDetails);
  }

}
