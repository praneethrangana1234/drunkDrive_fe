import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartdriveComponent} from './smartdrive/smartdrive.component';
import { HalfcircleComponent} from './halfcircle/halfcircle.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  {
    path: '',
    component: HalfcircleComponent
  },
  
  {
    path: 'seekers',
    loadChildren: () => import('./seekers/seekers.module').then(m => m.SeekersModule)
  },
  { 
    path: 'consulant',
  
    loadChildren: () => import('./consultant/consultant.module').then(m => m.ConsultantModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
 // { path: 'seekers', loadChildren: () => import('./seekers/seekers.module').then(m => m.SeekersModule) },
 // { path: 'consultant', loadChildren: () => import('./consultant/consultant.module').then(m => m.ConsultantModule) },
  //{
   // path: 'underwriting',
   // loadChildren: () => import('./underwriting/underwriting.module').then(m => m.UnderwritingModule)
 // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
