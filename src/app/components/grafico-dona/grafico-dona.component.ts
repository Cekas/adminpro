import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // '' Llabe que manda el padre
  // doughnut... propiedad que almacena el valor que necesita el hijo
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = '';
    

  constructor() { }

  ngOnInit() {
  }

  onChange( ) {

  }

}
