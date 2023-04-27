import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TraktoService } from './services/trakto.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';
import { CardMenuComponent } from './pages/home/card-menu/card-menu.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      HomeComponent,
      HeaderComponent,
      MaterialDidaticoComponent,
      CardMenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [TraktoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
