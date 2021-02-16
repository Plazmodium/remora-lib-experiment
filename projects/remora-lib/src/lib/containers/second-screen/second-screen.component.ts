import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../models/user.models';

@Component({
  selector: 'enl-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css']
})
export class SecondScreenComponent implements OnInit {

  firstName: string;
  lastName: string;
  user: IUser;
  @Output() userDetails = new EventEmitter<IUser>();
  constructor(private router: Router) {}

  ngOnInit() {}

  submit() {
    const user: IUser = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.userDetails.emit(user);
    this.router.navigateByUrl("second");
  }

}
