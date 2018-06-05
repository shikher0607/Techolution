import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }      from '@angular/http';

import { AppComponent } from './app.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { SchoolResultComponent } from './school-result/school-result.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolFormComponent,
    SchoolResultComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
