import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RemoraLibModule} from "remora-lib"


const routes: Routes = [
  {
    path: "lib",
    loadChildren: () =>
      import("../../projects/remora-lib/src/lib/remora-lib.module").then(
        (m) => m.RemoraLibModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
