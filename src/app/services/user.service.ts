import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _htp:HttpClient,private router : Router) { }
  addEmployee(data: any): Observable<any>
  {
   //http://127.0.0.1:501/Userlog
    return this._htp.post('http://127.0.0.1:501/Userlog',data);
  }
  getEmployee(id:number): Observable<any>
  {
    return this._htp.get<number>('http://127.0.0.1:501/Userlog/'+id);
  }
  //getEmployeeuser(un:string,pw:string): Observable<any>
  //{
  //  return this._htp.get('http://127.0.0.1:501/Userlog/credintial/'+un+'/'+pw);
 // }

  getEmployeeList(): Observable<any>
  {
    return this._htp.get('http://127.0.0.1:501/Userlog');
  }
  deleteemployee(id: number): Observable<number>
  {
   return this._htp.delete<number>('http://127.0.0.1:501/Userlog/'+id);
  }
  editEmployee(data: any): Observable<any>
  {
    return this._htp.put<number>('http://127.0.0.1:501/Userlog/',data);
  }
  login(username: string, password: string): Observable<any> {
    this.clearStorage();
    const body = {
      loginSaveRequest: {
        ipAddress: 'string', // Replace with actual IP address if needed
        loginType: 'LOGIN',
        userName: username
      },
      password: password,
      username: username
    };
    return this._htp.post('http://127.0.0.1:8085/users/authenticate', body);
    
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
    
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  clearStorage() {
    //localStorage.removeItem('user');
    localStorage.removeItem('token');
   // localStorage.removeItem('loginLogId');
    return
  }

}
