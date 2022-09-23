import { Component } from '@angular/core';
import { GetPaisService } from '../../services/get-pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  constructor(private getPais: GetPaisService) { }

  termino = "";
  hayError: boolean = false;
  paises: any = [];

  busqueda(pais: string) {
    this.hayError = false;
    this.termino = pais;
    this.getPais.buscarPais(pais)
      .subscribe((resp) => {
        this.paises = resp;
        // console.log(this.paises);
      }, (err) => {
        this.paises = [];
        this.hayError = true;
        console.log('Se encontró un error');
      });
  }
  
  sugerencias(terminos: string){
    // this.hayError = false;
    console.log("Validacion: ", terminos);
  }

}
