import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // ENTRADAS
  // Cuando se construye lo hace con los valores por defecto asta que no se ejecuta el ngOnInit no cargaria los valores que recibe mediante @Input() .
  //  @Input('nombre') Para renombrar un input, desde fuera, es una practica permitida pero no recomendada, nompre sera la variable que mande 
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;


  // SALIDAS
  // Sintasis para emitir un valor 
  // Asi le digo al pardre que este hija va a emitir un valor
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  // ELEMENTOS HTML
  // Recive como parametro una referencia de forma obligatoria a un elemento html mediante un # numeral
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    // console.log('constructor = leyenda ', this.leyenda);
    // console.log('constructor = progreso ', this.progreso);

  }

  ngOnInit() {
    // console.log('ngOnInit = leyenda ', this.leyenda);
    // console.log('ngOnInit = progreso ', this.progreso);

  }

  cambiarValor( valor?: number ) {
    
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return
    }
    
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return
    }

    this.progreso = this.progreso + valor;

    // Actualizar el padre. con el nuevo valor
    this.cambioValor.emit( this.progreso );
    
    // Para obtener el focos desues de cada camio 
    this.txtProgress.nativeElement.focus();
 
  }

  onChange( newValue:  number) {
    // console.log('onChange newValue ', newValue);
    
    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // Mediante la reverencia recojo el valor del elemento y lo igualo al progreso
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }
}
