import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Valores por defecto
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

    // Referenca a todo el DOM 
  // @Inject(DOCUMENT) private _document Para injectar todo el documento DOM
  constructor(
    @Inject(DOCUMENT) private _document,) {
    // Para poder llamar aqui a la funcion y que se carge al ejecutar la aplicacion es necesario injectar el servicio en app.component
    this.cargarAjustes();
  }

    guardarAjustes() {
      // Paso a string para poder guardar en local storage
      localStorage.setItem('ajustes', JSON.stringify( this.ajustes) );
    }

    cargarAjustes() {
      // si esiste objeto ajustes en local storage
      if ( localStorage.getItem('ajustes') ) {
        // lo recojo pasandolo a objeto
        this.ajustes = JSON.parse( localStorage.getItem('ajustes') );

        // Y llamo a aplicarTema pasandole el tema almacenado
        this.aplicarTema(this.ajustes.tema);
      } else {
        this.aplicarTema(this.ajustes.tema);        
      }
    }

    aplicarTema(tema: string) {
      let url = `assets/css/colors/${ tema }.css`;
      this._document.getElementById('tema').setAttribute('href', url );
      
      // Guardar ajustes
      this.ajustes.tema = tema;
      this.ajustes.temaUrl = url;
      this.guardarAjustes();
    }
  
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}