import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { SeekerService } from '../services/seeker.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { CountryService } from '../services/country.service';
import { JobtypeService } from '../services/jobtype.service';


@Component({
  selector: 'app-jobtypeadd',
  templateUrl: './jobtypeadd.component.html',
  styleUrls: ['./jobtypeadd.component.css']
})
export class JobtypeaddComponent implements OnInit{
  empform: FormGroup;
  extension : any='';
  education: string[] = ['BUS', 'VAN', 'OTHER'];
  selectedEducation: string;
  mat:any;
    constructor(private _fb: FormBuilder, private _empservice: EmployeeService,private jobtypeService: JobtypeService, private _dialogRep: MatDialogRef<JobtypeaddComponent>,@Inject(MAT_DIALOG_DATA) public data: any ,private _coresr: CoreService)
  {var date = new Date();
    if(this.data)
      {
      this.mat=data.id;
      }
      else{
        this.mat='';
      }
  
  
    this.empform=this._fb.group({
    //jobType: '',
   // code: ''
   id:this.mat,
    owner: '',
    rootId: '',
    seatCount: '',
    type: '',
    vehicleNo: '',
    year: '',
    status: '1'
  });
  if(this.data)
   {
    console.log("idddddddddd"+data.id);
  this.preview = "./assets/profile/"+this.data.nic+".png";
  this.preview = "./assets/profile/"+this.data.nic+".jpg";
  //this.preview = "./assets/profile/"+this.data.lastname+".jpeg";
  console.log("./assets/profile/"+this.data.lastname+".png");
   }
  
  
  }
 // public mySentences:employeee[] = [];
  selectedFiles?: FileList;
    currentFile?: File;
    progress = 0;
    
    message = '';
    preview = './assets/img_avatar.png';
    prename : any= '';
   // imageInfos?: Observable<any>;
    imageInfos : any;
  ngOnInit(): void {
    this.empform.patchValue(this.data)
     
  }
  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }
  }
  onformsubmit()
  {
    //if(this.empform.valid)
  
   if(this.empform.value.nic=="")
    {
      this._coresr.openSnackBar('Fill All Data')
  
    }
    else
    {
   /**  console.log(this.empform.value);*/
   if(this.data)
   {
    this.jobtypeService.editVehicle(this.empform.value).subscribe({
  
      next: (val: any) => {
      this._coresr.openSnackBar('Vehicle updated successfully')
      this._dialogRep.close(true);
      
     
    
    },
      error: (err: any) => {
      
        console.error(err);
      }
      
       })
   }
   else{
    this.jobtypeService.addVehicle(this.empform.value).subscribe({
  
      next: (val: any) => {
        this._coresr.openSnackBar('Vehicle added successfully')
  
      //alert('Employee added successfully');
      this._dialogRep.close(true);
      
      },
      error: (err: any) => {
      
        console.error(err);
      }
      
       })
   }
  }
  }
 /**  education: string[]=[
  'o/l','a/l','higher'
  
  ]
  upload(): void {
    if(this.empform.value.nic=="")
    {
      this._coresr.openSnackBar('first fill data','done')
    }
    else{
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.currentFile = file;
  
      // this.seekerService.upload(this.currentFile).subscribe({
                      this.extension = this.currentFile?.name.substring(this.currentFile?.name.lastIndexOf('.') + 1);
                      this.imageInfos =this.empform.value.nic+"."+this.extension;
  
        this.seekerService.upload(this.currentFile,this.imageInfos).subscribe({
   
        
        next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              console.log("okkkk"+this.currentFile?.name);
              console.log("okkkkqq"+this.currentFile?.name.substring(this.currentFile?.name.lastIndexOf('.') + 1));
              console.log("okkkknnn"+this.empform.value.nic);
               
              
                // this.extension = this.currentFile?.name.substring(this.currentFile?.name.lastIndexOf('.') + 1);
                
              
             
              //this.imageInfos = "./assets/profile/"+(this.currentFile?.name);
              this.imageInfos = "./assets/profile/"+this.empform.value.nic+"."+this.extension;
  
             // this.prename=this.currentFile?.name;
               // const emp: employeee = {
               // name: this.prename,
             //   ur: this.imageInfos,
             //   type: 'employeee',
           //   };
              
  
   
   //this.mySentences.push(emp);
  
    
            
   this._coresr.openSnackBar('Uploaded','done') 
            }
          },
          error: (err: any) => {
            console.log(err);
           this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }
  //
            this.currentFile = undefined;
          },
        });
      }
  
      this.selectedFiles = undefined;
    }
  
    }
   
  
  }*/
  
  }
  