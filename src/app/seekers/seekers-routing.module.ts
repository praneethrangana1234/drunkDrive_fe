import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeekersComponent } from './seekers.component';
import { RegistersComponent } from './registers/registers.component';

const routes: Routes = [
  {
    path: '',
    component: SeekersComponent,
    

    children: [
      {
        path: 'registers',
        component: RegistersComponent
      }
     
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeekersRoutingModule { }
