import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/core/core.service';
import { ConsultantService } from 'src/app/services/consultant.service';
import { CountryService } from 'src/app/services/country.service';
import { JobtypeService } from 'src/app/services/jobtype.service';
import { AddconsultService } from 'src/app/services/addconsult.service';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { WebcamServiceService } from 'src/app/services/webcam-service.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { UserService } from 'src/app/services/user.service';
interface AttendanceData {
  date: string;
  epf: string;
  timee: string;
  drStatus: string;
}

@Component({
  selector: 'app-makeconsult',
  templateUrl: './makeconsult.component.html',
  styleUrls: ['./makeconsult.component.css']
})
export class MakeconsultComponent implements OnInit {
  isDrunkPersonDetected: boolean = false;
  //dataSource = new MatTableDataSource<any>();
  dataSource = new MatTableDataSource<AttendanceData>();
  displayedColumnss: string[] = ['epf','date','timee','drStatus'];
  
  empform: FormGroup;
  empform1: FormGroup;
  
 // displayedColumns: string[] = ['id', 'consultName', 'countryName','jobtype','action'];
 // dataSourcee!: MatTableDataSource<any>;

 
  @ViewChild(MatSort) sort!: MatSort;
  extension : any='';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  consulantList: any;
  countryList: any;
  jobtypeList: any;
  src: string ;
  epff: string ;
  dates:string ;
  drtype:string ;
  timm:string ;
  drstt:string ;
  nn: string="";
 // nnn:string="1";
 // nnnn:string="1";
  nnm:string="";
  nnmm: string="";
  fullpath:any;
  constructor(private _fb: FormBuilder,private _coresr: CoreService,private _formBuilder: FormBuilder,private consultantService: ConsultantService,private countryService: CountryService,private jobtypeService: JobtypeService,private webcamService: WebcamServiceService,private http: HttpClient,private addconsultService:AddconsultService ,private attendanceService:AttendanceService ,private userService:UserService)
  //constructor(private router: Router,private _coresr: CoreService,private _dialog: MatDialog,private userService:UserService,private webcamService: WebcamServiceService,private http: HttpClient){

     { var date = new Date();

     // this.nn="1";
     // this.nnn="1";
     // this.nnnn="1";
     // this.nnm="1";
     // this.nnmm="1";
     

      this.empform=this._fb.group({
        conId: this.nn,
        consId: this.nnm,
        insertDate: date,
        jobtypeId: this.nnmm,
        user: 'admin1',
        
        
        //this.datePipe.transform(date,"yyyy-MM-dd")
        
      
      });

    }
   
    playSound(): void {
      const audio = new Audio();
  
      //audio.src = 'path/to/your/sound/file.mp3'; // Replace with the path to your audio file
      audio.src = './assets/warn.mp3';
      
      audio.load();
      audio.play();
    }
    
    
   



  ngOnInit(): void {
    //this.loadDataFromApi();
    this.getconsultantcouList();
    this.consultantService.getEmployeeList().subscribe((data:any)=>{
      
        this.consulantList=data;
        
          });
      
          this.countryService.getEmployeeList().subscribe((data:any)=>{
            
             this.countryList=data;
              
                });
               // this.jobtypeService.getEmployeeList().subscribe((data:any)=>{
                  
                //    this.jobtypeList=data;
                    
                  //    });
 
  }
  clear()
  {
    this.nn="1";
    // this.nnn="1";
    // this.nnnn="1";
     this.nnm="1";
     this.nnmm="1";
  
  
  
  }
  onchange1(a:string)
  {
    console.log("logg sucess"+a+" ");
  }

save(nn1:any,nnm1:any,nnmm1:any)
{var date = new Date();
  this.empform1=this._fb.group({
    conId: nn1,
    consId: nnm1,
    insertDate: date,
    jobtypeId: nnmm1,
    user: 'admin1',
    
    
    //this.datePipe.transform(date,"yyyy-MM-dd")
    
  
  });


  console.log("logg sucess"+" ");

  this.addconsultService.addconsult(this.empform1.value).subscribe({
  
    next: (val: any) => {
      this._coresr.openSnackBar('Employee added successfully')

    //alert('Employee added successfully');
   // this._dialogRep.close(true);
    
    },
    error: (err: any) => {
    
      console.error(err);
    }
    
     })
}

getconsultantcouList()
{
  this.addconsultService.getaddconsultcoun().subscribe({
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
this.addconsultService.deleteaddconsult(id).subscribe({
next: (res) =>{
  console.log("okkk");

//this._coreService.openSnackBar('Employee deleted','done');
this.getconsultantcouList();
},

error: console.log,
})
}

startWebcam1() {
  this.webcamService.startWebcam()
    .subscribe(response => {
      // Split the response by newline character
      const responseLines = response.split('\n');
      
      // Iterate over each line in the response
      for (const line of responseLines) {
        // Check if the line contains 'Image'
        if (line.includes('Image')) {
          // Split the line by comma to extract the image name
          const imageName = line.split(',')[0].split(': ')[1].trim();
          this.fullpath = "C:\\Users\\HP\\Desktop\\day2\\detected_faces\\";
          console.log('Image Name:', this.fullpath + imageName); // Log the image name

          // Prepare payload for classification request
          const payload = {
            image_path: this.fullpath + imageName
          };

          // Make classification request
           this.http.post('http://127.0.0.1:5000/classify', payload)
            .subscribe((response ) => {
              console.log('Classification Response:', response);
              
             
           
              if ((response as { classification: string }).classification === 'Drunk') {

             // if (response && response.classification === 'Drunk') {
                console.log('This image is classified as drunk.');
                this.playSound();
              } else {
                console.log('This image is not classified as drunk.');
                // Handle other classifications or scenarios
              }
            }, (error) => {
              console.error('Classification Error:', error);
              // Handle classification error here
            }); 

           


          // Break out of the loop after processing the first image name
          break;
        }
      }
    }, error => {
      console.error('Start Webcam Error:', error);
      // Handle start webcam error here
    });
}
startWebcam() {
  this.webcamService.startWebcam()
    .subscribe(response => {
      this.dataSource.data = [];
      // Split the response by newline character
      const responseLines = response.split('\n');
      
      // Iterate over each line in the response
      for (const line of responseLines) {
        // Check if the line contains 'Image'
        if (line.includes('Image')) {
          // Split the line by comma to extract the image name
          const imageName = line.split(',')[0].split(': ')[1].trim();
          this.fullpath = "C:\\Users\\HP\\Desktop\\day2\\detected_faces\\";
          console.log('Image Name:', this.fullpath + imageName); // Log the image name

          // Prepare payload for classification request
          const payload = {
            image_path: this.fullpath + imageName
          };

          // Make classification request
          this.http.post<any[]>('http://127.0.0.1:5000/classify', payload)
            .subscribe(classificationResponse => {
              console.log('Classification Response:', classificationResponse);
              classificationResponse.forEach(item => {
                console.log("ffdfd",item.epf); // Log each item in the response
             ////////////////////////////// 
            if(item.epf!=null)
              {
             this.epff=item.epf;
              }
              if(item.datetime!=null)
                {
             this.dates=item.datetime;
                }
               if(item.time!=null)
                 {  
             this.timm=item.time;
                 }
             //drtype=
            // const payload = {
             // date: item.datetime,
             // epf: item.epf,
             // location: 'koggala', // Replace 'string' with actual location value
             // timee: item.datetime // Replace 'string' with actual time value
          //  };
           /**  this.http.post('http://127.0.0.1:8085/Attendance', attendancePayload)
            .subscribe(attendanceResponse => {
              this.userService.setToken(response.token);
              console.log('Attendance Response:', attendanceResponse);
            }, (error) => {
              console.error('Attendance Error:', error);
              // Handle attendance error here
            });
             */

           
              ////////////////////////
              }
            
            
            
            );
            
              // Check if any item in the classification response array is classified as 'Drunk'
              const isDrunk = classificationResponse.some(item => item.classification === 'Drunk');
              if (isDrunk) {
                this.drstt="1";
                console.log('At least one image is classified as drunk.');
                this.playSound();
                this.isDrunkPersonDetected = true;
                this.src="assets/detected_faces/"+imageName;
                this.sentmail(this.epff,this.dates,this.timm);
              } else {
                console.log('No image is classified as drunk.');
                this.drstt="0";
                this.isDrunkPersonDetected = false;
                // Handle other classifications or scenarios
              }
            
            ///////////////////////////////////////
            
            const token = this.userService.getToken();

            if (token) {
              // Set the token in request headers
              const headers = new HttpHeaders({
                'Authorization': `Bearer ${token}`
              });
              const options = { headers: headers };
              
           /**  this.attendanceService.addattendance(attendancePayload,headers).subscribe({
  
              next: (val: any) => {
                this._coresr.openSnackBar('Employee added successfully')
          
              //alert('Employee added successfully');
             //this._dialogRep.close(true);
              
              },
              error: (err: any) => {
              
                console.error(err);
              }
            this.epf=item.epf;
             this.dates=item.datetime;
               })*/
               //payload: any, options
               const payload = {
                date: this.dates,
                epf: this.epff,
                location: 'koggala', // Replace 'string' with actual location value
                timee: this.timm,
                drStatus: this.drstt // Replace 'string' with actual time value
              };
               this.http.post('http://127.0.0.1:8085/Attendance', payload,options)
               .subscribe(attendanceResponse => {
                // this.userService.setToken(response.token);
                 console.log('Attendance Response:', attendanceResponse);
                 this.loadDataFromApi(this.epff);
               }, (error) => {
                 console.error('Attendance Error:', error);
                 // Handle attendance error here
               });
              
              
              }
            
            
            
           //////////////////////////////////////// 
            }, (error) => {
              console.error('Classification Error:', error);
              // Handle classification error here
            });

          // Break out of the loop after processing the first image name
          break;
        }
      }
    }, error => {
      console.error('Start Webcam Error:', error);
      // Handle start webcam error here
    });
}
sentmail(epf:string,date:string,time:string)
{
  const token = this.userService.getToken();

  if (token) {
    // Set the token in request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };

    const apiUrl = 'http://127.0.0.1:8085/Attendance/sendmail/'+epf+'/'+date+'/'+time;
    this.http.get<any>(apiUrl, options).subscribe(
      (any) => {
        
      
      },
      error => {
        console.error('Error loading data from API:', error);
        // Optionally handle error
      }
    );
  } 
}



loadDataFromApi(epf:string) {
  const token = this.userService.getToken();

  if (token) {
    // Set the token in request headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: headers };
  
    const apiUrl = 'http://127.0.0.1:8085/Attendance/'+epf;
    this.http.get<AttendanceData[]>(apiUrl, options).subscribe(
      (data: AttendanceData[]) => {
        this.dataSource.data = [];
        this.dataSource.data = data;
        console.log('Attendance Response:', this.dataSource.data);
      
      },
      error => {
        console.error('Error loading data from API:', error);
        // Optionally handle error
      }
    );
  }
}

getRowColor(row: AttendanceData): string {
  return row.drStatus === '1' ? 'red' : '';
}
}
