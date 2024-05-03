import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeekersRoutingModule } from './seekers-routing.module';
import { SeekersComponent } from './seekers.component';
import { RegistersComponent } from './registers/registers.component';
import { SharedModule } from '../_shared/shared.module';
import { LifeNavigationComponent } from '../_shared/layout/life-navigation/life-navigation.component';


@NgModule({
  declarations: [
    SeekersComponent,
    RegistersComponent,
    LifeNavigationComponent
  ],
  imports: [
    CommonModule,
    SeekersRoutingModule,
    SharedModule
  ]
})
export class SeekersModule { }
