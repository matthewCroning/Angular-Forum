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

  getThreads(page, view): Observable<any> {
    console.log("service page: " + page);
    console.log("service view: " + view);
    if(page == null && view == null){
      return this.http.get("/api/v1/thread/findall/" + "1/" + "10/");
    }
    else if(page != null && view == null){
      return this.http.get("/api/v1/thread/findall/" + page + "/10");
    }
    else if(page == null && view != null){
      return this.http.get("/api/v1/thread/findall/" + "1/" + view);
    }
    return this.http.get("/api/v1/thread/findall/" + page + "/" + view);
  }

  getThread(id): Observable<any> {
    return this.http.get("/api/v1/thread/findById/" + id);
  }

  createThread(title): Observable<any> {
    return this.http.post("/api/v1/thread/create", {title: title});
  }


}
