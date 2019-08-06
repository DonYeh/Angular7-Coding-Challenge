import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TargetsComponent } from "./targets/targets.component";
import { TargetDetailComponent } from "./target-detail/target-detail.component";

@NgModule({
  declarations: [AppComponent, TargetsComponent, TargetDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
