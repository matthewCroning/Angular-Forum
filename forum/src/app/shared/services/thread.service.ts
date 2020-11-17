import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../models/thread.model';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {


  constructor(private http: HttpClient) {

  }

  getThreads(): Observable<any> {
    return this.http.get("/api/v1/thread/findall");
  }

  getThread(id): Observable<any> {
    return this.http.get("/api/v1/thread/findById/" + id, );
  }


}
