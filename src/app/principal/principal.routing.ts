import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EstudiosExperienciaComponent } from './ee/estudios-experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { HomeComponent } from '../home/home.component';

export const PRINCIPAL_ROUTES: Routes = [
    {path: 'about', component: AboutComponent},
    { path: 'contacto', component: ContactoComponent },
    {path: 'estudios-experiencia', component: EstudiosExperienciaComponent},
    {path: 'portafolio', component: PortafolioComponent},
    {path: '', component: HomeComponent}
];
