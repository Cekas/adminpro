import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private settingsService: SettingsService
  ) {
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema : string, link: any) {
    console.log(tema, link);
  
    this.aplicarCheck(link);

    this.settingsService.aplicarTema(tema)
  }

  aplicarCheck(link: any) {
    // obtengo arreglo de los lesectores
    let selectores: any  = document.getElementsByClassName('selector');

    for ( let ref of selectores ){
      // elimino la clase working de todos los elementos del array
      ref.classList.remove('working');
    } 

    // agrego la clase working al elemento seleccionado
    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any  = document.getElementsByClassName('selector');

    let tema = this.settingsService.ajustes.tema;

    for ( let ref of selectores ){
      // reviso el data-theme de cada elemento
      if ( ref.getAttribute('data-theme') === tema ){
        // Aplico la clase
        ref.classList.add('working');
        break;
      }
    }
  }
}
