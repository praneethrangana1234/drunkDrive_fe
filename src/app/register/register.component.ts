import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  empform: FormGroup;
  Roles: any = ['seeker'];
  public showPassword: boolean = false;
  name: string="";
  // nnn:string="1";
  // nnnn:string="1";
  username:string="";
  password: string="";
  constructor(private _fb: FormBuilder,private userService:UserService,private _coresr: CoreService,private router: Router) {

    this.empform=this._fb.group({
      insertDate: '',
      insertUser: '',
      level: 50,
      name: '',
      password:'',
      type:"seeker",
      username:'',
      
    
    });
  
   }
  
  
   
    
  
  
  ngOnInit() {
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


save(name:string,username:string,password:string)
{
  if(this.empform.value.username==""||this.empform.value.password=="")
  {
    this._coresr.openSnackBar('Fill All Data')

  }
  else
  {
  
  var date = new Date();
  this.empform=this._fb.group({
    insertDate: date,
    insertUser: this.username,
    level: 50,
    name: this.name,
    password:this.password,
    type:"seeker",
    username:this.username
    
  
  });


  console.log("logg sucess"+" ");

  this.userService.addEmployee(this.empform.value).subscribe({
  
    next: (val: any) => {
      this._coresr.openSnackBar('user added successfully')
      this.router.navigate(['']);

    //alert('Employee added successfully');
   // this._dialogRep.close(true);
    
    },
    error: (err: any) => {
    
      console.error(err);
    }
    
     })


}

}


}