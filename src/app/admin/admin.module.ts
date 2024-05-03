import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../_shared/shared.module';
import { AdminNavigationComponent } from '../_shared/layout/admin-navigation/admin-navigation.component';
import { ConsultantComponent } from './driver/consultant.component';
import { CountryComponent } from './root/country.component';
import { JobtypeComponent } from './vehicle/jobtype.component';
import { MakeconsultComponent } from './complain/makeconsult.component';
import { PrintComponent } from './print/print.component';

import { RegistersComponent } from './employee/registers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AdminComponent,
   
    ConsultantComponent,
    CountryComponent,
    JobtypeComponent,
    MakeconsultComponent,
    PrintComponent,
    AdminNavigationComponent,
    RegistersComponent,
    AdminDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})



export class AdminModule { }
