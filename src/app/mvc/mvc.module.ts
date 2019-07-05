import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MvcComponent } from './mvc.component';
import { MvcFormComponent } from './mvc-form/mvc-form.component';
import { MvcListComponent } from './mvc-list/mvc-list.component';
import { AlertMessageModule } from '../shared/view-message/alert-message/alert-message.module';
import { SuccessMessageModule } from '../shared/view-message/success-message/success-message.module';
import { FilterByNamePipe } from './mvc-list/filter-by-name.pipe';


@NgModule({
  declarations: [
    MvcComponent,
    MvcFormComponent, 
    MvcListComponent, 
    FilterByNamePipe 
  ],
  imports: [
    CommonModule,
    AlertMessageModule,
    SuccessMessageModule,
    ReactiveFormsModule
  ],
  exports:[
    MvcComponent
  ]
})
export class MVCModule { }
