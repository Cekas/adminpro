// Modulo de las Paginas principales de la aplicacion.

import { NgModule } from "@angular/core";

// Rutas de Pages
import { PAGES_ROUTES } from "./pages.routes";

// Modulo de paginas compartidad
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from "./pages.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";


// Modulos adicionales
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";


// Mudulo para majenar los eventos de un formulario
import { FormsModule } from "@angular/forms";


// ng2-charts Pugin para las graficas
import { ChartsModule } from 'ng2-charts';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule        
    ]
})

export class PagesModule { }