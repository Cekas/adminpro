// Modulo de paginas compartidas por toda la app

import { NgModule } from "@angular/core";

// CommonModule *ngif / pipes ect....
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";

@NgModule({
    declarations: [
        NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
    ],
    exports: [
        NoPageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}