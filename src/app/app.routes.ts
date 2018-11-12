import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages/pages.component";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
    import { ProgressComponent } from "./pages/progress/progress.component";
    import { Graficas1Component } from "./pages/graficas1/graficas1.component";
    import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";

// Archivo de rutas pricipales

const appRoutes: Routes = [
    {
        // children Rutas hijas que van a trabajar dentro del componente PagesComponent
        path:'', // La Ruta raiz vacia lleva al componente PagesComponent, el cual tiene hijas
        component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'progress', component: ProgressComponent },
            { path:'gravicas1', component: Graficas1Component },
            { path:'', redirectTo: '/dashboard', pathMatch: 'full'}, // Ruta, Cuando no existe ninguna ruta.

        ]
    },
    { path:'login', component: LoginComponent },
    { path:'register', component: RegisterComponent },
    // {path:'', redirectTo: '/dashboard', pathMatch: 'full'}, // Ruta, Cuando no existe ninguna ruta.
    { path:'**', component: NoPageFoundComponent}, // Cualquier otra ruta que no este definida.
];

// Definicion del modulo para poder exportar el arreglo de rutas.
// forRoot Cuando se trata de rutas princiales.
// forChild Cuando se trata de rutas hijas.
// {useHash: true } Indica que se usara # en la creacion de las rutas.
export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true } );

