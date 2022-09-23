import { Component, OnInit } from '@angular/core';
import { GetPaisService } from '../../services/get-pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  constructor(private getPais: GetPaisService) { }

  termino = "";
  hayError: boolean = false;
  capitales: any = [];

  busqueda(capital: string) {
    this.hayError = false;
    this.termino = capital;
    this.getPais.buscarCapital(capital)
      .subscribe((resp) => {
        this.capitales = resp;
      }, (err) => {
        this.capitales = [];
        this.hayError = true;
        console.log('Se encontró un error');
      });
  }

  sugerencias(terminos: string) {
    // this.hayError = false;
    console.log("Validacion: ", terminos);
  }
  ngOnInit(): void {
  }

}
