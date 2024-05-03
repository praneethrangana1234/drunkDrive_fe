
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SeekerService {

  constructor(private _htp:HttpClient) { }
  addEmployee(data: any): Observable<any>
  {
    return this._htp.post('http://127.0.0.1:501/Seeker',data);
  }
  getEmployee(id: number): Observable<any>
  {
    return this._htp.get<number>('http://127.0.0.1:501/Seeker/'+id);
  }
getEmployeebylogId(id:number):Observable<any>
{
  return this._htp.get<number>('http://127.0.0.1:501/Seeker/logid/'+id);
}

  getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Seeker');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/Seeker/'+id);
  }
  //editEmployee(id: number,data: any): Observable<any>
  editEmployee(data: any): Observable<any>

  {
    return this._htp.put<number>('http://127.0.0.1:501/Seeker/',data);
  }
  upload(file: File,vtype:string,vtypekn:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    
    formData.append('image', file);

    const req = new HttpRequest('POST', `http://127.0.0.1:501/Seeker/seekerimage/`+vtype+'/'+vtypekn, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._htp.request(req);
  }
  uploademp(file: File,vtype:string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    
    formData.append('image', file);

    const req = new HttpRequest('POST', `http://127.0.0.1:501/Seeker/seekerimagee/`+vtype, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this._htp.request(req);
  }

  getFiles(currentFile : any): Observable<any> {
    return this._htp.get(`http://127.0.0.1:501/Seeker/files/`+currentFile);
  }


}
