import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Imc } from '../imc';

@Component({
  selector: 'app-mvc-form',
  templateUrl: './mvc-form.component.html',
  styleUrls: ['./mvc-form.component.css']
})
export class MvcFormComponent implements OnInit {

  dadosImportados: Imc[] = [];
  novoCliente:Imc;
  mvcForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.mvcForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      peso: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern(/\d/g)]],
      gordura: ['', [Validators.required, Validators.pattern(/\d/g), Validators.minLength(2), Validators.maxLength(6)]],
      altura: ['', [ Validators.required, Validators.pattern(/\d{1}\.\d{2}/g), Validators.minLength(2), Validators.maxLength(6)]],

    });
  }

  cadCliente(){
    this.novoCliente = this.mvcForm.getRawValue() as Imc;
    this.novoCliente.imc = this.calculoMvc(this.novoCliente.peso, this.novoCliente.altura);    
    this.dadosImportados.push(this.novoCliente);
  }

  calculoMvc(peso: number, altura: number){
    return (peso / (altura * altura)).toFixed(2);
  }

}
