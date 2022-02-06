import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
