import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from '@angular/router';
import { IUser } from "../models/user.models";

@Component({
  selector: "enl-remora-lib",
  template: `
   <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class RemoraLibComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

}
