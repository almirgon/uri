import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    const myAPI = environment.url;
    this.apiUrl = myAPI + '/feed';
  }

  getAll(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get(url);
  }

  deletePost(id){
    const url = this.apiUrl + '/' + id;
    return this.http.delete(url);
  }

  
}
