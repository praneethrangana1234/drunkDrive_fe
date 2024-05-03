import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ConsultantComponent } from './driver/consultant.component';
import { CountryComponent } from './root/country.component';
import { JobtypeComponent } from './vehicle/jobtype.component';
import { MakeconsultComponent } from './complain/makeconsult.component';
import { AdminNavigationComponent } from '../_shared/layout/admin-navigation/admin-navigation.component';
import { PrintComponent } from './print/print.component';
import { RegistersComponent } from '../seekers/registers/registers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';





const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    //component: AdminDashboardComponent,
    

    children: [
      
      {
        // path: 'registers',
         path: 'admin-dashboard',
         component: AdminDashboardComponent
       },
      
      {
       // path: 'consulant',
        path: 'driver',
        component: ConsultantComponent
      },
      {
       // path: 'country',
        path: 'root',
        component: CountryComponent
      },
      {
       // path: 'jobtype',
        path: 'vehicle',
        component: JobtypeComponent
      },
      {
       // path: 'makeconsult',
        path: 'complain',
        component: MakeconsultComponent
      },
      {
        path: 'print',
        component: PrintComponent
      },
      {
       // path: 'registers',
        path: 'employee',
        component: RegistersComponent
      }
     

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
