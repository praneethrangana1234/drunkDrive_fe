import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EmpaddComponent } from './empadd/empadd.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SmartdriveComponent} from './smartdrive/smartdrive.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { HalfcircleComponent } from './halfcircle/halfcircle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DomSanitizer } from '@angular/platform-browser';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CountryComponent } from './admin/root/country.component';
import { JobtypeComponent } from './admin/vehicle/jobtype.component';
import { ConsultantComponent } from './admin/driver/consultant.component';
import { MakeconsultComponent } from './admin/complain/makeconsult.component';
import { UserComponent } from './user/user.component';
import { AppointdetailsComponent } from './appointdetails/appointdetails.component';
import { SharedModule } from './_shared/shared.module';
import { AdminNavigationComponent } from './_shared/layout/admin-navigation/admin-navigation.component';
import { ConsultantaddComponent } from './consultantadd/consultantadd.component';
import { CountryaddComponent } from './countryadd/countryadd.component';
import { JobtypeaddComponent } from './jobtypeadd/jobtypeadd.component';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    EmpaddComponent,
    SmartdriveComponent,
    FileUploadComponent,
    HalfcircleComponent,
    ConsultantaddComponent,
    CountryaddComponent,
    JobtypeaddComponent,
    RegisterComponent
   
    
    
   // CountryComponent,
   // JobtypeComponent,
   // ConsultantComponent,
    //MakeconsultComponent,
    //UserComponent,
    //AppointdetailsComponent,
   // EmpaddComponent,
   
     
  ],
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatListModule,
    RoundProgressModule,
    MatCardModule,
    SharedModule
    
    
  
 
  
  
  
  
   
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
