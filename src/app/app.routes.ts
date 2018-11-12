import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";

import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

// Archivo de rutas pricipales

const appRoutes: Routes = [

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

