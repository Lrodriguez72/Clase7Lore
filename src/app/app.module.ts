import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { ListadoAlumnosModule } from './pages/listado-alumnos/listado-alumnos.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    AppRoutingModule,
    // AL TENER IMPORTADO AppRoutingModule, no hace falta las siguientes 2 lineas:
    // RouterModule,
    // RouterModule.forRoot([]),
    //ListadoAlumnosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
