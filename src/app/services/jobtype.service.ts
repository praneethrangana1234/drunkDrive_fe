import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {

  constructor(private _htp:HttpClient ,private userService:UserService) { }
  
  private setTokenHeader() {
    const token = this.userService.getToken();

    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    } else {
      throw new Error('Token not available');
    }
  }
  
  addVehicle(data: any): Observable<any>
  { 
    const headers = this.setTokenHeader();
    const options = { headers: headers };
    return this._htp.post('http://127.0.0.1:8085/Vehicle',data,options);
 
  }
  

  getVehicle(id: number): Observable<any>
  {const headers = this.setTokenHeader();
    const options = { headers: headers };
    return this._htp.get('http://127.0.0.1:8085/Vehicle/'+id,options);
  }
 getVehicleList(): Observable<any>
  {const headers = this.setTokenHeader();
    const options = { headers: headers };
    return this._htp.get('http://127.0.0.1:8085/Vehicle',options);
  }
  deleteVehicle(id: number): Observable<number>
  {const headers = this.setTokenHeader();
    const options = { headers: headers };
   return this._htp.delete<number>('http://127.0.0.1:8085/Vehicle/'+id,options);
  }
  editVehicle(data: any): Observable<any>
  {const headers = this.setTokenHeader();
    const options = { headers: headers };
    return this._htp.put<number>('http://127.0.0.1:8085/Vehicle/',data,options);
  
  }
 
}
