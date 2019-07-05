import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

import { Imc } from '../imc';
import { MvcService } from '../mvc.service';

@Component({
  selector: 'app-mvc-list',
  templateUrl: './mvc-list.component.html',
  styleUrls: ['./mvc-list.component.css']
})
export class MvcListComponent implements OnInit, OnDestroy {
  
  filtro: string = "";
  alertMessage: string;
  successMessage: string;

  debounce: Subject<string> = new Subject<string>();
  debounceDados: Subject<Imc[]> = new Subject<Imc[]>();

  @Input() dadosImportados: Imc[] = [];
  
  constructor(private mvcService: MvcService) { }
  
  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe(filtro => this.filtro = filtro);
    this.debounceDados.pipe(debounceTime(300)).subscribe(dados => dados.map(dado => {this.dadosImportados.push(dado)
      this.successMessage = "Dados importados com sucesso!";
    }));

  }
  
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    this.debounceDados.unsubscribe();

  }

  importarDados(){
    this.mvcService.importDados().subscribe((clientes) => {
    this.debounceDados.next(clientes);
        
    }, (err) =>{
      this.alertMessage = "Ocorreu um erro ao tentar importar os dados";
      console.log(err);
      
    })

    
   
   
  }

}
