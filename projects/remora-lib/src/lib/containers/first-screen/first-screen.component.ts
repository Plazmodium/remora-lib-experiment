import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../models/user.models';

@Component({
  selector: 'enl-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {

  firstName: string;
  lastName: string;
  user: IUser;
  @Output() userDetails = new EventEmitter<IUser>();
  constructor(private router: Router) { }

  ngOnInit() { }

  submit() {
    const user: IUser = {
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.userDetails.emit(user);
    this.router.navigateByUrl("second");
  }
}
