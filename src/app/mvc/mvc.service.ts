import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Imc } from './imc';



@Injectable({
  providedIn: 'root'
})
export class MvcService {


  constructor(private http: HttpClient ) { }

  importDados(){
    return this.http.get<Imc[]>('https://api-pacientes.herokuapp.com/pacientes');

  }

}
