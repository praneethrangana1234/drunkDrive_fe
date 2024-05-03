import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private _htp:HttpClient) { }

  addattendance(payload: any, options: any) { // Accept options parameter
    return this._htp.post('http://127.0.0.1:8085/Attendance', payload, options); // Pass options to post method
  }
  sendmail(epf: string,date: string,time: string): Observable<any>
  {http://127.0.0.1:8085/Attendance/sendmail/gff/gfg/fg
    return this._htp.get('http://127.0.0.1:8085/Attendance/sendmail/'+epf+'/'+date+'/'+time);
  }


 /**  addattendance(data: any): Observable<any>
  {
    return this._htp.post('http://127.0.0.1:8085/Attendance',data);
  }*/
 /** getEmployee(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/JobType/'+id);
  }
 getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/JobType');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/JobType/'+id);
  }
  editEmployee(data: any): Observable<any>
  {
    return this._htp.put<number>('http://127.0.0.1:501/JobType/',data);
  }
*/ 
}
