import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/name';
  private apiurlCap: string = 'https://restcountries.com/v3.1/capital';
  private apiAlpha: string = 'https://restcountries.com/v3.1/alpha/';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {
    const url = `${this.apiUrl}/${termino}`;
    return this.http.get(url);
  }

  buscarCapital(termino: string): Observable<any> {
    const url = `${this.apiurlCap}/${termino}`;
    return this.http.get(url);
  }

  getPaisCodigo(termino: string): Observable<any> {
    const url = `${this.apiAlpha}/${termino}`;
    return this.http.get(url);
  }
}
