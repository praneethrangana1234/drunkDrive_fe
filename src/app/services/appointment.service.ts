import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _htp:HttpClient) { }
  addEmployee(data: any): Observable<any>
  {
    return this._htp.post('http://127.0.0.1:501/Appointment',data);
  }
  getappointdetails(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/getappointment/'+id);   
  }
  getappointdetailscon(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/getappointmentcon/'+id);   
  }

  getEmployee(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/'+id);

  }
  gettimedate(cons_id: number,date: string,time:string): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/'+cons_id+'/'+date+'/'+time);
  }
 
 // http://127.0.0.1:501/Appointment/applymail/ddd/dd

sendmail(mail: string,un: string,sir: string,dt: string): Observable<any>
{
  return this._htp.get('http://127.0.0.1:501/Appointment/applymail/'+mail+'/'+un+'/'+sir+'/'+dt);
}
replymail(mail: string,un: string,dt:string): Observable<any>
{
  return this._htp.get('http://127.0.0.1:501/Appointment/replymail/'+mail+'/'+un+'/'+dt);
  
}


  getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/Appointment/'+id);
  }
  editEmployee(data: any): Observable<any>
  {
    return this._htp.put<number>('http://127.0.0.1:501/Appointment/',data);
  }
  editEmployeestatus(id: number,sta: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/status/'+id+'/'+sta);
  }
  
  getappointmentprint(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Appointment/PrintAppointment');
  }
  
}
