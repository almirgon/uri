import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    const api = environment.url;
    this.apiUrl = api + '/register';
   }

   getAll(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }
  getById(id) {
    const url = this.apiUrl + '/' + id;
    return this.http.get(url, id);
  }

}
