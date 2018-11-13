import { Component, OnInit } from '@angular/core';

// Funcion para llamar al archivo src\assets\js\custom.js y ejecutar el plugin
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
