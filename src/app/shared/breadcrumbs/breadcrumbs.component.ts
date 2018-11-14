import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(
    private router: Router,
    // De este modo se cambia el titulo de la pestaña del navegador de forma dinamica dependiendo de la pestaña en la que uno se encutre
    private title: Title,
    // Agregar metadata de forma dinamica a cada pestaña
    private meta: Meta
  ) {
     
      this.getDataRoute().subscribe(
        data => {
          // console.log(data);    
          this.titulo = data.titulo;

          // De este modo se cambia el titulo de la pestaña del navegador de forma dinamica dependiendo de la pestaña en la que uno se encutre
          this.title.setTitle ( `AdminPro ${ this.titulo }`);  

          // Agregar metadata de forma dinamica a cada pestaña, al igual que relleno el titulo podria rellenar la descripcion.
          const metaTag: MetaDefinition = {
            name: 'descripcion',
            content: this.titulo
          };

          // Actualizo el meta en el archivo html
          this.meta.updateTag( metaTag );
        });
  }


  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(
      // necesito solo las instancias de ActivationEnd
      filter( evento => evento instanceof ActivationEnd ),
      // Solo necesito los firstChild vacios
      filter( ( evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      // Solo me interesa la data
      map(  (evento: ActivationEnd) => evento.snapshot.data )
    );
  }
}
