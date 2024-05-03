import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebcamServiceService {

  constructor(private http: HttpClient) { }
  startWebcam() {
    return this.http.get('http://localhost:5011/start-webcam', { responseType: 'text' });
  }
}
