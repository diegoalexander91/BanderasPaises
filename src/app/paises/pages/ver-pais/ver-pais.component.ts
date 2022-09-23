import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { GetPaisService } from '../../services/get-pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: any;

  constructor(
    private route: ActivatedRoute,
    private urlPais: GetPaisService) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(({ id }) =>
          this.urlPais.getPaisCodigo(id)))
      .subscribe(pais => {
        this.pais = pais;
        console.log(this.pais);
      });

    //   this.route.params.subscribe(({ id }) => {
    //     this.urlPais.getPaisCodigo(id).subscribe((pais) => {
    //       console.log(pais);
    //       let fifa = pais[0].fifa;
    //       console.log(fifa);
    //     });
    //   });
  }
}
