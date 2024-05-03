import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { AddconsultService } from 'src/app/services/addconsult.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ConsultantService } from 'src/app/services/consultant.service';
import { CountryService } from 'src/app/services/country.service';
import { JobtypeService } from 'src/app/services/jobtype.service';
import { SeekerService } from 'src/app/services/seeker.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {
  constructor(private _fb: FormBuilder,private _coresr: CoreService,private _formBuilder: FormBuilder,private consultantService: ConsultantService,private countryService: CountryService,private jobtypeService: JobtypeService,private addconsultService:AddconsultService,private seekerService:SeekerService,private _dialog: MatDialog, private _coreService: CoreService, private http:HttpClient,private appointmentService:AppointmentService,private datePipe: DatePipe)
{
}
  
  
  getpdf()
  {
    window.open("./assets/123.pdf", '_blank');
  }
setprint()
{
  this.appointmentService.getappointmentprint().subscribe({
    next: (res) =>{
      console.log(res);
      this._coresr.openSnackBar('loaded!')
  },
    error: console.log, 
    
    
      });
      
    }
}
