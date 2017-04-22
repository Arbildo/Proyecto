import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    LoginComponent
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
