import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultantComponent } from './consultant.component';
import { RegistercComponent } from './registerc/registerc.component';
import { PrintconComponent } from './printcon/printcon.component';


const routes: Routes = [
  {
    path: '',
    component: ConsultantComponent,
    

    children: [
      {
        path: 'registerc',
        component: RegistercComponent
      },
      {
        path: 'printcs',
        component: PrintconComponent
      }
      
      
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantRoutingModule { }
