import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TargetsComponent } from "./targets/targets.component";

const routes: Routes = [{ path: "targets", component: TargetsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
