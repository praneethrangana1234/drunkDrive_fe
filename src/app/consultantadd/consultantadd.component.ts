import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , AbstractControl, ValidatorFn} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { SeekerService } from '../services/seeker.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ConsultantService } from '../services/consultant.service';

@Component({
  selector: 'app-consultantadd',
  templateUrl: './consultantadd.component.html',
  styleUrls: ['./consultantadd.component.css']
})
export class ConsultantaddComponent implements OnInit{
  emailForm: FormGroup;
  empform: FormGroup;
  mat:any;
  extension : any='';
    constructor(private _fb: FormBuilder, private _empservice: EmployeeService,private seekerService: ConsultantService, private _dialogRep: MatDialogRef<ConsultantaddComponent>,@Inject(MAT_DIALOG_DATA) public data: any ,private _coresr: CoreService,private seekerrService: SeekerService)
  {var date = new Date();
  
    if(this.data)
    {
    this.mat=data.id;
    }
    else{
      this.mat='';
    }
  
    this.empform=this._fb.group({
    id:this.mat,
    epf: '',
    name: '',
    address: '',
    nic: '',
    birthday: '',
    gender: '',
    tp: ['', [Validators.required, this.tenDigitValidator()]],
    //gmail: '',
    gmail: ['', [Validators.required, Validators.email]],
    insertUser:'admin1',
    
    insertDate:date
    //this.datePipe.transform(date,"yyyy-MM-dd")
    
  
  });
  if(this.data)
   {
    console.log("idddddddddd"+data.id);
  this.preview = "./assets/profile/"+this.data.nic+".png";
  this.preview = "./assets/profile/"+this.data.nic+".jpg";
  //this.preview = "./assets/profile/"+this.data.lastname+".jpeg";
  console.log("./assets/profile/"+this.data.lastname+".png");
   }
  // this.emailForm = this._fb.group({
   // gmail: ['', [Validators.required, Validators.email]] // Validators.required ensures the field is not empty
 // });
  
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
    imageInfosknown : any;
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

  tenDigitValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value || isNaN(Number(value))) {
        return { 'invalid': true };
      }
      if (value.length !== 10) {
        return { 'invalidLength': true };
      }
      return null;
    };
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
    this.seekerService.editEmployee(this.empform.value).subscribe({
  
      next: (val: any) => {
      this._coresr.openSnackBar('Employee updated successfully')
      this._dialogRep.close(true);
      
     
    
    },
      error: (err: any) => {
      
        console.error(err);
      }
      
       })
   }
   else{
    this.seekerService.addEmployee(this.empform.value).subscribe({
  
      next: (val: any) => {
        this._coresr.openSnackBar('Employee added successfully')
  
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
  education: string[]=[
  'o/l','a/l','higher'
  
  ]
   upload(): void {
    if(this.empform.value.nic=="" && this.empform.value.epf=="")
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
                      this.imageInfosknown =this.empform.value.epf+"."+this.extension;
  
        this.seekerrService.upload(this.currentFile,this.imageInfos,this.imageInfosknown).subscribe({
   
        
        next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              console.log("okkkk"+this.currentFile?.name);
              console.log("okkkkqq"+this.currentFile?.name.substring(this.currentFile?.name.lastIndexOf('.') + 1));
              console.log("okkkknnn"+this.empform.value.nic);
                  this.imageInfos = "./assets/profile/"+this.empform.value.nic+"."+this.extension;
                  this.imageInfosknown = "./assets/known_faces/"+this.empform.value.epf+"."+this.extension;

                 
            
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
   
  
  }
  
  }
  