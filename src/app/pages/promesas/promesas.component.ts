import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // Llamada a la promesa
    this.contarTres()
    .then(
      (mensaje) => console.log('Termino! ', mensaje)  
    )
    .catch(
      (error) => console.error('Error en la promesa ', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
      return new Promise( (resolve, reject) => {

      let contador = 0;
      
      // declaro una variable y la igualo a una bandera para detenerla
      let intervalo = setInterval( () => {

        contador += 1;
        console.log(contador);
        
        if ( contador === 3 ) {
          resolve( true );
          // una ves se resuelve limpio la variable/intervalo para liverar memoria
          clearInterval(intervalo);
        }
      }, 100);
    });
  }

}
