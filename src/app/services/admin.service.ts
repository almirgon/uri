import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiURL: string;

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiURL = myAPI + '/admin';
   }

   getAll(): Observable<any> {
     const url = this.apiURL;
     return this.http.get(url);
   }
}
