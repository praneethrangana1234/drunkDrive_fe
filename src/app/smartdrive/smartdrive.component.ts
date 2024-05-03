
import { Component, Input, OnDestroy,ChangeDetectorRef,OnInit} from '@angular/core';
import { MakeService } from '../services/make.service';
import { AddconsultService } from '../services/addconsult.service';
import { FormControl } from '@angular/forms';
import { CoreService } from '../core/core.service';

import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode, MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderChange, MatSliderModule} from '@angular/material/slider';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { strings } from '@material/circular-progress';

// interface PeriodicElement {
 // plan: string;
//policyFee: number;
 // lifeCover: number;
 // totalAnualPremium: string;
//}
/* ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/

@Component({
  selector: 'app-smartdrive',
  
  templateUrl: './smartdrive.component.html',
  styleUrls: ['./smartdrive.component.css'],
  
 
})

export class SmartdriveComponent implements OnInit {
  
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
 // dataSource1 = ELEMENT_DATA;
  disabled = false;
  
  max: number = 100;
  min: number = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value =0;
 
  

  formatLabel(value: number): string {
//console.log("ggggg");

    if (value >= 1000) {
       
      return Math.round(value / 1000) + 'k';
   
    }

    return `${value}`;
  
  
  
  }

  
  ma = new FormControl(0);
  mod = new FormControl(0);
  usg = new FormControl(0);
  vtype = new FormControl(0);
  
  DepartmentList: any;
  Modekkist: any;
  coverlist: any;
    
  
  nn: string="1";
  nnn:string="1";
  nnnn:string="1";
  nnm:string="1";
  nnnnm: number=0;
  public nnnnms: any
  myn: number=0;
  listofname: any= [];
  listofname1: any= [];
  plan: string="";
  policyFee: number=0;
  lifeCover: number=0;
 totalAnualPremium: string="";
 
  constructor(private _makeService: MakeService,private _coresr: CoreService ,private cdr:ChangeDetectorRef,private test:AddconsultService)
  {
    this.nn="1";
    this.nnn="1";
    this.nnnn="1";
    this.nnm="1";
    this.nnnnm=0;
    this.myn=0;
  }
  ngOnInit(): void {
    //this.set(this.value);
    this.nn="1";
    this.nnn="1";
    this.nnnn="1";
    this.nnm="1";
    this.nnnnm=0;
    this.myn=0;
  
   // this._makeService.getMakeList().subscribe((data:any)=>{
       
      //console.log(data);
     // this.DepartmentList=data;
      
    //  })

this.test.getaddconsultconidjobtype(1,1).subscribe((data:any)=>{
 
 
  console.log(data);
 // this.DepartmentList=data;
  
  })

   }
   
   ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

    set(value:number)
    { 
  // console.log("testtt"+Math.round(this.listofname[0]),Math.round(this.listofname[1]),Math.round(this.listofname[6]))

   const arr = this.coverlist;
this.listofname1=[];
arr?.forEach((element : any) => {

  
  this.listofname1.push(element.plan);
  let outputno=parseFloat(element.totalAnualPremium.replace(/,/g,''))
 
  if(Math.round(value)===0)
  {
    this.plan="";
    this.policyFee=0;
    this.lifeCover=0;
    this.totalAnualPremium="";

  }
  else if(Math.round(value)>=0 && Math.round(value)<Math.round((this.listofname[0])))

  {
    this.plan="";
    this.policyFee=0;
    this.lifeCover=0;
    this.totalAnualPremium="";

  }
 
 else if(Math.round(value)>=Math.round((this.listofname[0])) && Math.round(value)<=Math.round((this.listofname[1])))
{
  if(Math.round(outputno)===Math.round(this.listofname[0]))
  {
    console.log("logg sucess1"+element.plan+" "+element.policyFee)
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
  
  


}
else if(Math.round(value)>=Math.round((this.listofname[1])) && Math.round(value)<=Math.round((this.listofname[2])))
{
  if(Math.round(outputno)===Math.round(this.listofname[1]))
  {
    console.log("logg sucess2"+element.plan+" "+element.policyFee)
  this.setlable(element.plan);

    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
  
  
}

else if(Math.round(value)===Math.round((this.listofname[2]))|| Math.round(value)<=Math.round((this.listofname[3])))
{
  if(Math.round(outputno)===Math.round(this.listofname[2]))
  {
    //console.log("logg sucess"+element.plan+" "+Math.round((outputno)))
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
 
}
else if(Math.round(value)===Math.round((this.listofname[3]))|| Math.round(value)<=Math.round((this.listofname[4])))
{
  if(Math.round(outputno)===Math.round(this.listofname[3]))
  {
   // console.log("logg sucess"+element.plan+" "+Math.round((outputno)))
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
 
}
else if(Math.round(value)===Math.round((this.listofname[4]))|| Math.round(value)<=Math.round((this.listofname[5])))
{
  if(Math.round(outputno)===Math.round(this.listofname[4]))
  {
    //console.log("logg sucess"+element.plan+" "+Math.round((outputno)))
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
 
}
else if(Math.round(value)===Math.round((this.listofname[5]))|| Math.round(value)<=Math.round((this.listofname[6])))
{
  if(Math.round(outputno)===Math.round(this.listofname[5]))
  {
  //  console.log("logg sucess"+element.plan+" "+Math.round((outputno)))
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
 
}
else if(Math.round(value)>=Math.round((this.listofname[6])))
{
  if(Math.round(outputno)===Math.round(this.listofname[6]))
  {
    //console.log("logg sucess"+element.plan+" "+Math.round((outputno)))
    this.plan=element.plan;
    this.policyFee=element.policyFee;
    this.lifeCover=element.lifeCover;
    this.totalAnualPremium=element.totalAnualPremium;
  }
 
}


});

//console.log(this.listofname1);

 //this.coverlist.array.forEach(element => {
  //if(element.totalAnualPremium==this.value)
//{

 // }
 // else{
    
 // }
 //});
  
  


    }
    setlable(plan1: string)
    {
this.plan=plan1;
    }
    
   onchange(make: string,id: number){ 
    
  //  console.log("gdgdgdg"+make+" "+id);
//console.log(make);

this.getmodel(make) ; 

}
restrict(event:any)
{

}
sett(ma:string,mo:string,usea:string,utyp:string,val:number){
console.log("aaaff"+ma+" "+mo+" "+usea+" "+utyp+" "+val);
if((ma==="1")||(mo==="1")||(usea==="1")||(utyp==="1")||(val===0))
{
  this._coresr.openSnackBar('Fill All Data','done');
}
else{

  this.listofname=[];
this._makeService.getcoverList(ma,mo,usea,val,utyp).subscribe((data:any)=>{
  
  

 // console.log(data);
  this.coverlist=data;
  this.nnnnms=data.length;

  for(let i=0;i<this.nnnnms;i++)
  {
//console.log(data[1]);
    //this.listofname.push(Number.parseInt(data[i].totalAnualPremium));
let output=parseFloat(data[i].totalAnualPremium.replace(/,/g,''))
this.listofname.push(output);
  }
  console.log("api"+this.nnnnms+"  "+this.listofname);
  console.log("api"+Math.max(...this.listofname));
  console.log("api"+Math.min(...this.listofname));
  this.max = Math.round(Math.max(...this.listofname)+1);
  this.min = Math.round(Math.min(...this.listofname)-1);

})
}
}

onchange1(make: string){ 
   
//console.log(make);

this.getmodel(make) ; 

}
   getmodel(name: string)
   {
     
   this._makeService.getModelList(name).subscribe((data:any)=>{
  
   // console.log("api"+name);
   // console.log(data);
   
   this.Modekkist=data;
    
   })
}
}