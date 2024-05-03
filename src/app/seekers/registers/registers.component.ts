import {AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { EmpaddComponent } from './empadd/empadd.component';
//import { EmployeeService } from './services/employee.service';
//import { SeekerService } from './services/seeker.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { CoreService } from './core/core.service';
//import { MakeService } from './services/make.service';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { strings } from '@material/circular-progress';
import { DomSanitizer } from '@angular/platform-browser';

import { __await } from 'tslib';
import { CoreService } from 'src/app/core/core.service';
import { MakeService } from 'src/app/services/make.service';
import { SeekerService } from 'src/app/services/seeker.service';
import { EmpaddComponent } from 'src/app/empadd/empadd.component';
import { AddconsultService } from 'src/app/services/addconsult.service';
import { JobtypeService } from 'src/app/services/jobtype.service';
import { CountryService } from 'src/app/services/country.service';
import { ConsultantService } from 'src/app/services/consultant.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  Roles: any = ['8.00-10.00', '11.00-13.00', '14.00-16.00'];
  title = 'crud';
  thumbnail: any;
  pp:any="";
  url="";
  globalseekerid:number=0;
  globalusername:string='';
  globalgender:string='';
  full:any;
  globalconsultantmail:string='';
  salutation:string='';
  countcon:number;
  consultantid:number;
  listofname: any= [];
  listofnamecon: any= [];
  empform: FormGroup;
  displayedColumns: string[] = ['id', 'name', 'address', 'birthday','nic','gender','tp','gmail','action'];
  displayedColumns1: string[] = ['id', 'countryName', 'jobtype', 'consultName','applyDate','timeRange','approve'];

  dataSource!: MatTableDataSource<any>;
  dataSource1!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginator1!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort1!: MatSort;
  consulantList: any;
  countryList: any;
  jobtypeList: any;
  
  
 // consultid: string="";
 //countryid:string="";
 //obtypeid: string="";
 //rolename: string="";



 applyDate: string;
 approve: 0;
 consultId: Number;
 countryId: Number;
 jobId: Number;
 seekerId: Number;
 timeRange: string;
 datePipeString : string;
 


  constructor(private routerr: ActivatedRoute,private router: Router,private _fb: FormBuilder,private _coresr: CoreService,private _formBuilder: FormBuilder,private consultantService: ConsultantService,private countryService: CountryService,private jobtypeService: JobtypeService,private addconsultService:AddconsultService,private seekerService:SeekerService,private _dialog: MatDialog, private _coreService: CoreService, private http:HttpClient,private appointmentService:AppointmentService,private datePipe: DatePipe)
{
  //console.log(this.router.getCurrentNavigation().extras.state.example); // should log out 'bar'

  var date = new Date();
  this.empform=this._fb.group({
    applyDate: '',
    approve: '',
    consultId:'',
    countryId: '',
    insertDate:date,
    insertUser:'SEEKER',
    jobId:'',
    seekerId:'1',
    timeRange:'',
    
  });

}
name:any;
ngOnInit(): void {
 // queryParams:{data:this.userid}
 console.log("appppaad"+history.state['dataId']);
  this.routerr.queryParams.subscribe((params:any)=>
  {
   // console.log("blapnnn"+params.name);
this.name=params.data;
  })
  console.log(history.state.data);
 // this.getEmployeeList(history.state['dataId']);
  this.getEmployeeList(53);

  this.url ="./assets/2023-07-11/"+this.pp;
  this.consultantService.getEmployeeList().subscribe((data:any)=>{
      
    this.consulantList=data;
    
      });
  
      this.countryService.getEmployeeList().subscribe((data:any)=>{
        

        
         this.countryList=data;
         console.log("country"+this.countryList);
          
            });
          //  this.jobtypeService.getEmployeeList().subscribe((data:any)=>{
             
              //  this.jobtypeList=data;
             //  console.log("jobtype"+this.jobtypeList);
             //     });
}
nnf: string="ss";
//url="./assets/user-icon.png";


//url="file:///C://Users//HP//Apps//a2023-07-01//a1683713219764.jpg";
//file:///C:/Users/HP/Apps/a2023-07-01/a1683713219764.jpg
//url="\\\\172.20.10.20\\GENERAL\\pics\\YASASC.png"
openaddemp()
{
 
  
  
  
  //this.full=history.state['dataId']+"-"+this.globalseekerid;
 //const dialogRef= this._dialog.open(EmpaddComponent,history.state['dataId']);
 const dialogRef= this._dialog.open(EmpaddComponent);

 dialogRef.afterClosed().subscribe({
next: (val) =>{
  if(val)
  {
    //this.getEmployeeList();
  }
}

 })
}
openedit(data: any)
{
  
const dialogRef=this._dialog.open(EmpaddComponent,{
 data, 
});
dialogRef.afterClosed().subscribe({
  next: (val) =>{
    if(val)
    {
      this.getEmployeeList(history.state['dataId']);
    }
  }
  
   })
 
}

async save(applyDate:string,consultId:Number,countryId:Number,jobId:Number,seekerId:Number,timeRange:string)
{
  if(this.globalseekerid==0)
  {
    this._coresr.openSnackBar('First Seeker Add ')

  }
  else
  {
  
  var date = new Date();
  
    console.log(this.datePipeString);
  this.empform=this._fb.group({
    applyDate: this.datePipe.transform(applyDate,'yyyy-MM-dd'),
    approve: 0,
    consultId: consultId,
    countryId: countryId,
    insertDate: date,
    insertUser: 'SEEKER',
    jobId: jobId,
    seekerId: this.globalseekerid,
    timeRange: timeRange
  
  });
  this.appointmentService.addEmployee(this.empform.value).subscribe({
  
    next: (val: any) => {
      this._coresr.openSnackBar('Employee added and sent mail successfully')
      this.getappointdetails(this.globalseekerid);
    //alert('Employee added successfully');
   // this._dialogRep.close(true);
    
    },
    error: (err: any) => {
    
      console.error(err);
    }
    
     });
    



  this.consultantService.getEmployee(Number(consultId)).subscribe((data:any)=>{
             
    //this.jobtypeList=data;
    console.log("jobtype"+data.gmail);
    
    this.globalgender=data.gender;
    
    if(this.globalgender=="male")
    {
      this.salutation="Dear Sir,"
    }
    else if(this.globalgender=="female")
    {
      this.salutation="Dear Madam,"
    }
    //this.globalconsultantmail=data.gmail;
    this.sentmail(data.gmail,this.globalusername,this.salutation,applyDate);

  });
  
  this.getappointdetails(this.globalseekerid);


}

 
}

onchange1(nnmm:any)
{

}
find(nnm1:any,nnmm1:any){
console.log(nnm1);
console.log("aaaa"+nnmm1);
this.listofname=[];
this.addconsultService.getaddconsultconidjobtype(Number(nnm1),Number(nnmm1)).subscribe((data:any)=>{
 
  this.listofnamecon=data;
  this.countcon=data.length;

  for(let i=0;i<this.countcon;i++)
  {
console.log(data[1].consId);



    //this.listofname.push(Number.parseInt(data[i].totalAnualPremium));
let consultantid=data[i].consId;
//this.listofname.push(output);
this.appointmentService.gettimedate(data[i].consId,'2023-03-08','8-9').subscribe((data:any)=>{
        

        
  this.countryList=data;
  console.log("country"+this.countryList);
   
     });




    


/////////////////////

  }
  console.log(data);




 // this.DepartmentList=data;
  
  })






}

//this.appointmentService.gettimedate(data[i].consId,'2023-03-08','8-9').subscribe({
 // next:(data:any)=>{
  // this.jobtypeList=data;
 
//},
//error: (err: any) => {
 //console.log("jobtype"+data[i].consId);
 //console.error(err);
//}
 //});
sentmail(mail:string,un:string,sir:string,dat:string)
{
  this.appointmentService.sendmail(mail,un,sir,dat).subscribe({
    next: (res) =>{
     
    },
    error: console.log, 
    
    
      });
}

getEmployeeList(logid:number)
{
 // this.seekerService.getEmployeebylogId(history.state['dataId']).subscribe({
    this.seekerService.getEmployeebylogId(53).subscribe({

    next: (res) =>{

  
console.log("asssss"+res);
console.log(res[0].id);
this.dataSource=new MatTableDataSource(res);
this.dataSource.sort=this.sort;
this.dataSource.paginator=this.paginator;
this.globalseekerid=res[0].id;


this.globalusername=res[0].name;
this.getappointdetails(res[0].id);
  
},
error: console.log, 


  });
}



 getappointdetails(id:Number)
{
  this.appointmentService.getappointdetails(Number(id)).subscribe({
    next: (res1) =>{
      console.log(res1);
    this.dataSource1=new MatTableDataSource(res1);
    this.dataSource1.sort=this.sort1;
    this.dataSource1.paginator=this.paginator1;
    
    
  
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
applyFilter1(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource1.filter = filterValue.trim().toLowerCase();

  if (this.dataSource1.paginator) {
    this.dataSource1.paginator.firstPage();
  }
}
deleteEmployee(id: number)
{
  console.log("idddd"+id);
this.seekerService.deleteemployee(id).subscribe({
next: (res) =>{
 // console.log("okkk");


this.getEmployeeList(history.state['dataId']);
this._coresr.openSnackBar('Employee deleted','done');
},

error: console.log,
})
}
file : any;
async  getFile(event: any)
{
this.file=event.target.files[0];
console.log("file",this.file);
console.log("fileddd",this.file.name);
this.pp=this.file.name;
let formDatad = new FormData();
formDatad.set("UwMotDocs",this.file);
await this.http.post('http://127.0.0.1:498/VehicleType',formDatad).subscribe((Response)=>
{
 // this.url ="./assets/2023-07-07/"+this.pp;
 console.log("aaaaa"+Response);
 //this.loadurl(this.file.name);
}

);
//this.url ="./assets/2023-07-11/"+this.pp;


//this.loadurl(this.pp)
//http://127.0.0.1:498/VehicleType/files/981.jpg
   
//this._makeService.getprofile(this.file.name)
     // .subscribe((baseImage : any) => {
        //alert(JSON.stringify(data.image));
     //   let objectURL = 'data:image/jpeg;base64,' + baseImage.image;

     //    this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
    //  });
    //  this.http.get(`http://127.0.0.1:498/VehicleType/files/`+this.file.name, {responseType: 'json'})
//this._makeService.getprofile(this.file.name).subscribe(()=>{
       
     // console.log(datav);
      
     // this.nnf=datav.type;
     // console.log("dddd"+this.nnf);
    //  http://127.0.0.1:498/VehicleType/files/981.JPG
     //  this.thumbnail ="http://127.0.0.1:498/VehicleType/files/"+this.file.name;
   // if(event.target.files)
   // {
//var reader=new FileReader();
//reader.readAsDataURL(event.target.files[0]);
//reader.onload=(Event:any)=>{
//this.url=this.nnf;

//console.log("dddd1233"+event.target.result);
//this.url=this.nnf;


//}

   // }
    
    
 //   });

 

    

// this.url ="./assets/2023-07-08/"+this.file.name;

 //this.pp="";

}
async loadurl(aaa : any)
{
  //this.url ="./assets/2023-07-08/"+this.pp;
  this.url =await "./assets/profile/"+aaa;
  
 // console.log("corrext"+this.url);

}


}