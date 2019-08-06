import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TargetsComponent } from './targets/targets.component';
import { TargetDetailComponent } from './target-detail/target-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetsComponent,
    TargetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
