import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {


  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europa', 'Oceania'];
  regionActiva: string = '';

  constructor() { }

  activarRegion(region: string) {
    return this.regionActiva = region;
  }
  selectorCSS(region: string) {
    return (region === this.regionActiva) ? "btn btn-primary" : 'btn btn-outline-primary';
  }

}
