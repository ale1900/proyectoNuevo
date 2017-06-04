import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PRINCIPAL_ROUTES } from './principal/principal.routing';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {path: 'principal', component: PrincipalComponent, children: PRINCIPAL_ROUTES },
    { path: '', component: HomeComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
