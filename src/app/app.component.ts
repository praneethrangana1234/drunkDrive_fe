import {AfterViewInit, Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmployeeService } from './services/employee.service';
import { SeekerService } from './services/seeker.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CoreService } from './core/core.service';
import { MakeService } from './services/make.service';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { strings } from '@material/circular-progress';
import { DomSanitizer } from '@angular/platform-browser';

import { __await } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  thumbnail: any;
  pp:any="";
  url="";
 
  displayedColumns: string[] = ['id', 'name', 'address', 'birthday','nic','gender','tp','gmail','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(private _dialog: MatDialog, private _coreService: CoreService, private _makeService: MakeService, private http:HttpClient ,private sanitizer: DomSanitizer,private seekerService: SeekerService)
{

}

ngOnInit(): void {
  this.getEmployeeList();
  this.url ="./assets/2023-07-11/"+this.pp;

}
nnf: string="ss";
//url="./assets/user-icon.png";


//url="file:///C://Users//HP//Apps//a2023-07-01//a1683713219764.jpg";
//file:///C:/Users/HP/Apps/a2023-07-01/a1683713219764.jpg
//url="\\\\172.20.10.20\\GENERAL\\pics\\YASASC.png"
openaddemp()
{
 const dialogRef= this._dialog.open(EmpaddComponent);
 dialogRef.afterClosed().subscribe({
next: (val) =>{
  if(val)
  {
    this.getEmployeeList();
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
      this.getEmployeeList();
    }
  }
  
   })
 
}
getmake()
{
  this._makeService.getMakeList().subscribe({
    next: (res) =>{
    console.log(res);
    
    },
    error: console.log, 
    
    
      }); 
}



getEmployeeList()
{
  this.seekerService.getEmployeeList().subscribe({
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
deleteEmployee(id: number)
{
  console.log(id);
this.seekerService.deleteemployee(id).subscribe({
next: (res) =>{
  console.log("okkk");

this._coreService.openSnackBar('Employee deleted','done');
this.getEmployeeList();
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
