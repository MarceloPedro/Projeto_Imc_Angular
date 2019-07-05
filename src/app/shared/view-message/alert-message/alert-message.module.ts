import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertMessageComponent } from './alert-message.component';

@NgModule({
  declarations: [AlertMessageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AlertMessageComponent
  ]
})
export class AlertMessageModule { }
