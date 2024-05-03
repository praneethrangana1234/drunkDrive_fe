import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _htp:HttpClient) { }
  addEmployee(data: any): Observable<any>
  {
    return this._htp.post('http://localhost:3000/employees',data);
  }

  getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://localhost:3000/employees');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://localhost:3000/employees/'+id);
  }
  editEmployee(id: number,data: any): Observable<any>
  {
    return this._htp.put<number>('http://localhost:3000/employees/'+id,data);
  }
}
