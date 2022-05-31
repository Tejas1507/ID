import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BypassService {

  constructor(private http:HttpClient) { }

  login(data: any):Observable<any>{
    console.log("hi")
    return this.http.post('http://localhost:3000/api/users/login',data);
  }
}
