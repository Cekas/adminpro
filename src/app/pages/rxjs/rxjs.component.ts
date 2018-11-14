import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy{

  // Referencia al observador que esta ejecutandose
  subscription: Subscription

  // Los obserbables trabajan con una liea de datos
  constructor() {

    this.subscription = this.regresaObserbable()
    // .pipe(
    //   // retry(2) Realizara el proceso una vez general mas dos intentos extra
    //   retry(2)
    // )
    .subscribe(
      (numero) => console.log('Subs ', numero),
      (error) => console.error('Error ', error),
      () => console.log('El obserbador termino.')
      );
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La paguina se va a cerrar.');
    // Eliminar una supscripcion
    this.subscription.unsubscribe();    
  }
  
  regresaObserbable():Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;
        
        const salida = {
          valor : contador
        };

        observer.next( salida );

        // Mediante next notifico cada vez que llegue informacion en este caso contador.
        // observer.next( contador );
        
        // if ( contador === 3 ) {
        //   // Limpio el intervalo pero el obserbable sigue activo
        //   clearInterval( intervalo );
          
        //   // Para indicar que no se van a recibir mas daros
        //   observer.complete();
        // }
        
        // if ( contador === 2 ) {
        //   // Si limio el intervalo no llegara a tres y no disparara el .complete, el error lo disparara al tercer intento
        //   // clearInterval( intervalo );
        //   observer.error('Auxilio');
        // }

      }, 1000 );

      // Onserbador al que me puedo suscribir y aplicar el pipe 
    }).pipe(
      // El operador map me permite transformar la data
      map(resp => resp.valor),

      // filte se utiliza para decidir que datos passan , ebuelve true/false
      // recibe dos argumentos valor o respuesta y la lposicion index que es el numero de veces que se a llaado
      filter( ( valor, index) => {
        console.log('Filter ', valor, index);

        if ( (valor % 2) === 1 ) {
          // Inpar
          return true;
        } else {
          // Par
          return false; 
        }
        
      })

    );
  }
}
