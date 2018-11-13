import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";

const pagesRoutes: Routes = [
    {
        // children Rutas hijas que van a trabajar dentro del componente PagesComponent
        path:'', // La Ruta raiz vacia lleva al componente PagesComponent, el cual tiene hijas
        component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'progress', component: ProgressComponent },
            { path:'gravicas1', component: Graficas1Component },
            { path:'account-settings', component: AccountSettingsComponent },
            { path:'', redirectTo: '/dashboard', pathMatch: 'full'}, // Ruta, Cuando no existe ninguna ruta.
        ]
    }
];

// forChild Se utiliza cuando un <router-outlet> esta dentro de otro
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );