import { AuthGuard } from './../interceptor/auth.guard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../models/thread.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient, private auth: AuthGuard) {

  }

  create(threadId, content, title): Observable<any> {
    return this.http.post("/api/v1/post/create", {threadId: threadId, content: content, title: title});
  }




}
