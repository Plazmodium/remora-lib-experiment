import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstScreenComponent } from './containers/first-screen/first-screen.component';
import { SecondScreenComponent } from "./containers/second-screen/second-screen.component";
import { RemoraLibComponent } from "./remora-lib.component";

export const routes: Routes = [
  {
    path: "",
    component: FirstScreenComponent
  },
  {
    path: "second",
    component: SecondScreenComponent
  }
  //   path: "",
  //   children: [
  //     {
  //       path: "",
  //       component: RemoraLibComponent
  //     },
  //     {
  //       path: "second",
  //       component: SecondScreenComponent
  //     },
  //   ],
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LibRoutingModule {}
