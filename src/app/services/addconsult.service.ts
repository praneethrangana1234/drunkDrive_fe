import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AddconsultService {

  constructor(private _htp:HttpClient) { }
  addconsult(data: any): Observable<any>
  {
    return this._htp.post('http://127.0.0.1:501/AddConsult',data);
  }
getaddconsultList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult');
  }
  getaddconsultcoun(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/Allcon');
  }


  getaddconsult(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/'+id);
  }
  getaddconsultbyConsid(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/ConsId/'+id);
  }
  getaddconsultbyConid(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/ConId/'+id);
  }
  getaddconsultbyjobtype(id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/JobtypeId/'+id);
  }
  getaddconsultconidjobtype(con_id: number,jobtype_id: number): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/AddConsult/two/'+con_id+'/'+jobtype_id);
  }

  deleteaddconsult(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/AddConsult/'+id);
  }
  editaddconsult(data: any): Observable<any>
  {
    return this._htp.put<number>('http://127.0.0.1:501/AddConsult/',data);
  }


}
