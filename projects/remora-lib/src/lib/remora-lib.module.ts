import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { RemoraLibComponent } from "./remora-lib.component";
import { SecondScreenComponent } from "./containers/second-screen/second-screen.component";
import { LibRoutingModule } from './lib-routing.module';
import { FirstScreenComponent } from './containers/first-screen/first-screen.component';

@NgModule({
  declarations: [RemoraLibComponent, SecondScreenComponent, FirstScreenComponent],
  imports: [FormsModule, LibRoutingModule],
  exports: [RemoraLibComponent, SecondScreenComponent]
})
export class RemoraLibModule {}
