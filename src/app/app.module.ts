import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderFooterComponent } from './principal/header-footer/header-footer.component';
import { PortafolioComponent } from './principal/portafolio/portafolio.component';
import { EstudiosExperienciaComponent } from './principal/ee/estudios-experiencia.component';
import { AboutComponent } from './principal/about/about.component';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { ServicioService } from './servicio.service';
import { routing } from './app.routing';
import { TrabajoComponent } from './principal/portafolio/trabajo/trabajo.component';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterComponent,
    PortafolioComponent,
    EstudiosExperienciaComponent,
    AboutComponent,
    ContactoComponent,
    TrabajoComponent,
    PrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
