import { AuthService } from './../../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/shared/models/post.model';
import { Thread } from 'src/app/shared/models/thread.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post: Post = new Post();
  @Input() thread: Thread;
  
  constructor(private route: ActivatedRoute, private postService: PostService, private http: HttpClient, private authService:AuthService) { }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      console.log("params = " + params);
      this.post.thread = params['id'];
    });
    
  }

  create(){
    console.log("thread = " + this.thread);
    console.log(this.thread);
    console.log("creating post");

    this.post.title = "new post";
    this.post.thread = this.thread;
    
    this.post.content;
    console.log(this.post);
    this.postService.create(this.thread._id, this.post.content, this.post.title).subscribe(
      (data) => {
        console.log(data);
        window.location.reload();
    })
  }

}
