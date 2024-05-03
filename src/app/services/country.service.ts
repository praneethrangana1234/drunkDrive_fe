import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _htp:HttpClient) { }
  addEmployee(data: any): Observable<any>
  {
    return this._htp.post('http://127.0.0.1:501/Country',data);
  }
  getEmployee(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Country/'+id);
  }
  getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Country');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/Country/'+id);
  }
  editEmployee(data: any): Observable<any>
  {
    return this._htp.put<number>('http://127.0.0.1:501/Country/',data);
  }
  getcountryprint(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Country/PrintCountry');
  }
  
}
