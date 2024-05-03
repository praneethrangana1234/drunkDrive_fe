import { Component,OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CoreService } from '../core/core.service';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from '../services/user.service';
import { WebcamServiceService } from '../services/webcam-service.service';
import { HttpClient } from '@angular/common/http';
  
@Component({
  selector: 'app-halfcircle',
  templateUrl: './halfcircle.component.html',
  styleUrls: ['./halfcircle.component.css'],
  
})
export class HalfcircleComponent implements OnInit{
  un=new FormControl();
  pw=new FormControl();
userid:any;
fullpath:any;
  constructor(private router: Router,private _coresr: CoreService,private _dialog: MatDialog,private userService:UserService,private webcamService: WebcamServiceService,private http: HttpClient){
   
  }
  playSound(): void {
    const audio = new Audio();

    //audio.src = 'path/to/your/sound/file.mp3'; // Replace with the path to your audio file
    audio.src = './assets/warn.mp3';
    
    audio.load();
    audio.play();
  }
  name:any;
  ngOnInit() {
    //this.startWebcam();
  }

  save()
  {console.log(this.un.value)
    console.log(this.pw.value) 
   // alert(this.pw.value);
  
  if(this.un.value==""||this.pw.value=="")
  {
    this._coresr.openSnackBar('fill username and password');
  }
  else{
    /** 
    this.userService.getEmployeeuser(this.un.value,this.pw.value).subscribe({
  
      next: (val: any) => {
      //this._coresr.openSnackBar('Employee updated successfully')
      //this._dialogRep.close(true);
      console.log(val.name);
      console.log(val.password);
      console.log(val.type);
      if(val.type=="admin")
      {
      
        const navigationExtras: NavigationExtras = {
          state: { dataId:val.id},
        };
        this.router.navigate(['/admin/consulant'],navigationExtras);
       
      }
      else if(val.type=="seeker")
      {
       
      const navigationExtras: NavigationExtras = {
        state: { dataId:val.id },
      };
       this.router.navigate(['/seekers/registers'],navigationExtras);
      }
      else if(val.type=="cons")
      {
       // alert("log correct");
       {
       
        const navigationExtras: NavigationExtras = {
          state: { dataId:val.id },
        };
        this.router.navigate(['/consultant/registerc'],navigationExtras);
      }
    
      }
    },
      error: (err: any) => {
        this._coresr.openSnackBar('login failed');
        this.un.value=="";
        this.pw.value=="";
        console.error(err);
      
      
      }
      
       })


 */
 
       this.userService.login(this.un.value,this.pw.value).subscribe(
        (response) => {
          this.userService.setToken(response.token);
          console.log('Token:', response); // Assuming the token is returned in the response

          console.log('name',response.user);
          //console.log('pass',response.password);
          console.log('business',response.user.roles[0].name);
          console.log('id',response.user.id);

        //  this.router.navigate(['/admin/consulant']);
          // Handle successful login
         // this.userService.setToken(response.token);
         // console.log('Token:', response.token); // Assuming the token is returned in the response
          //this.router.navigate(['/admin/dashboard']);
         // this.router.navigate(['/auth']);
          
          
         
         
         if(response.user.roles[0].name=="ADMIN")
          {
          
            const navigationExtras: NavigationExtras = {
             state: { dataId:response.user.id},
            };
            this.router.navigate(['/admin/admin-dashboard'],navigationExtras);

          }
          else if(response.user.roles[0].name=="SEC")
          {
           
          const navigationExtras: NavigationExtras = {
            state: { dataId:response.user.id },
          };
           this.router.navigate(['/seekers/registers'],navigationExtras);
          }
          else if(response.user.roles[0].name=="USER")
          {
           // alert("log correct");
           {
           
            const navigationExtras: NavigationExtras = {
              state: { dataId:response.user.id },
            };
            this.router.navigate(['/consultant/registerc'],navigationExtras);
          }
        
          }
       
       
       
       
        },
        (error) => {
          // Handle login error
         // this.router.navigate(['/admin']);
         this._coresr.openSnackBar('login failed');
        this.un.value=="";
        this.pw.value=="";
        console.error(error);
        
        }
      );
 
    
 
 
      }
  
   
   
   
   
  
   

    
  
  
  }
  setseekerpanel(id:any)
  {
   // const dialogRef=this._dialog.open(ConsultantComponent,{
     // id, 
    // });
  
     this.router.navigate(['/seekers/registers',{id}]);

  
  
  }


 // startWebcam() {
  //  this.webcamService.startWebcam()
  //    .subscribe(response => {
   //     console.log('Response:', response[0].['Image']); // Log the plain text response
      
      // }, error => {
     //   console.error('Error:', error);
    //  });
 // }


 /*startWebcam() {
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
          this.fullpath="C:\\Users\\HP\\Desktop\\day2\\detected_faces\\";
          console.log('Image Name:', this.fullpath+imageName); // Log the image name
         ////////////////////////////////////////////

         const payload = {
          image_path: this.fullpath+imageName
        };

        this.http.post('http://127.0.0.1:5000/classify', payload)
        .subscribe((response) => {
          console.log('Responsepost:', response);
          // Handle response here
          if ((response as { classification: string }).classification === 'Drunk') {
            console.log('This response is classified as drunk.');
            this.playSound();
            
          } else {
            console.log('This response is not classified as drunk.');
           // this.playSound();
            // Handle other classifications or scenarios
          }
        
        
        }, (error) => {
          console.error('Error:', error);
          // Handle error here
        });
    
//////////////////////////////////////////////////////////////////
          break; // Break out of the loop after getting the first image name
        }
      }
    }, error => {
      console.error('Error:', error);
    });
}
*/

startWebcam() {
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
            .subscribe((response) => {
              console.log('Classification Response:', response);
              // Handle classification response here
             
             
             
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






}
