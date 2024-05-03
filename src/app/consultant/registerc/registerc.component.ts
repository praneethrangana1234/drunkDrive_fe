
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { HttpClient } from '@angular/common/http';
import { CoreService } from 'src/app/core/core.service';
import { SeekerService } from 'src/app/services/seeker.service';
import { AddconsultService } from 'src/app/services/addconsult.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registerc',
  templateUrl: './registerc.component.html',
  styleUrls: ['./registerc.component.css']
})
export class RegistercComponent implements OnInit {
  displayedColumns: string[] = ['id', 'countryName', 'jobtype', 'seekerName','applyDate','timeRange','approve','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _fb: FormBuilder,private _coresr: CoreService,private _formBuilder: FormBuilder,private addconsultService:AddconsultService,private seekerService:SeekerService,private _dialog: MatDialog, private _coreService: CoreService, private http:HttpClient,private appointmentService:AppointmentService,private datePipe: DatePipe)
{}
ngOnInit(): void {

  this.getappointdetails(16);
}
  
  getappointdetails(id:Number)
  {
    this.appointmentService.getappointdetailscon(Number(id)).subscribe({
      next: (res) =>{
        console.log(res);
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      
      
    
    },
      error: console.log, 
      
      
        });
  
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editstatus(id :number)
  {
    this.appointmentService.editEmployeestatus(Number(id),1).subscribe({
      next: (res) =>{
        console.log(res);
        this.getappointdetails(16);
    },
      error: console.log, 
      
      
        });
  }

}
