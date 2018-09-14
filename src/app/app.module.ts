import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DepartmentsService } from './services/deparments.service';
import { AuthService } from './services/auth.service';
import { RootService } from './services/root.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    RootService,
    AuthService,
    DepartmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
