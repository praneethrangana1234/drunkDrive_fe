import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private _htp:HttpClient) { }

   

  getMakeList(): Observable<any>
  {
    return this._htp.get('http://172.20.11.164:498/Make/{Make}');
  }
  getModelList(name:string):  Observable<any>
  {
    return this._htp.get('http://172.20.11.164:498/MakeModel/{CheckModel}?make='+name);
  }
  getcoverList(make:string,model:string,usg:string,sum:any,vtype:string):  Observable<any>
  {
    return this._htp.get('http://172.20.11.164:498/Basic/{rate}?make='+make+'&model='+model+'&usg='+usg+'&value='+sum+'&vehicle_type='+vtype);
  }
  getprofile(name:string):  Observable<any>
  {
    return this._htp.get('http://127.0.0.1:498/VehicleType/files/'+name);
  }
  
}
