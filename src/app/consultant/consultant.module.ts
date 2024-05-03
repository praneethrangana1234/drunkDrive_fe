import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';
import { RegistercComponent } from './registerc/registerc.component';
import { SharedModule } from '../_shared/shared.module';
import { UnderwritingNavigationComponent } from '../_shared/layout/underwriting-navigation/underwriting-navigation.component';
import { PrintconComponent } from './printcon/printcon.component';



@NgModule({
  declarations: [
    ConsultantComponent,
    RegistercComponent,
    UnderwritingNavigationComponent,
    PrintconComponent,
   

  ],
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    SharedModule
  ]
})
export class ConsultantModule { }
