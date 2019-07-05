import { Pipe, PipeTransform } from '@angular/core';
import { Imc } from '../imc';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(clientes: Imc[], descriptionQuerry: string) {
    descriptionQuerry = descriptionQuerry.trim().toLowerCase();

    if(descriptionQuerry){
      return clientes.filter((cliente) =>
        cliente.nome.toLowerCase().includes(descriptionQuerry)
      );
    }else{
      return clientes;
    }

  }

}
