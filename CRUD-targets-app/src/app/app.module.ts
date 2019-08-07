import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TargetsComponent } from "./targets/targets.component";
import { TargetDetailComponent } from "./target-detail/target-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { TargetSearchComponent } from "./target-search/target-search.component"; // simulates a data server
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    TargetsComponent,
    TargetDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TargetSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
