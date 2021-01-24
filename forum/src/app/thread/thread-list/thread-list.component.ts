import { ThreadService } from './../../shared/services/thread.service';
import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/shared/models/thread.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  threads: Thread[];
  page;

  view;
  constructor(private authService: AuthService, private route: ActivatedRoute, private ThreadService:ThreadService, private router: Router) {
    this.getThreads();
   }
  ngOnInit() {
  }

  getThreads(){
    this.threads = [];
    this.page = this.route.snapshot.paramMap.get('page');
    console.log("page:" + this.page);
    this.view = this.route.snapshot.paramMap.get('view');
    console.log("view:" + this.view);
    this.ThreadService.getThreads(this.page, this.view).subscribe((threads: Thread[]) => {
      console.log(threads);
      this.threads = threads;
    });
  }
  
  nextPage(){
    this.page = this.route.snapshot.paramMap.get('page');
    if(this.page == null){
      this.router.navigateByUrl('/threads/threadlist/2');
    }
    else{
      var nextPage =  Number(this.page)+1;
      this.router.navigateByUrl('/threads/threadlist/' +  nextPage);
    }
    console.log("gone to next");
    this.getThreads();
  }

  prevPage(){
    this.page = this.route.snapshot.paramMap.get('page');
    if(this.page <= 1){
      this.router.navigateByUrl('/threads/threadlist');
    }
    else{
      var prevPage =  Number(this.page)-1;
      this.router.navigateByUrl('/threads/threadlist/' +  prevPage);
    }
    console.log("gone to prev");
    this.getThreads();
  }

  setViewNumber(number){
    this.page = this.route.snapshot.paramMap.get('page');
    this.view = this.route.snapshot.paramMap.get('view');
    if(this.page == null){
      this.page = 1;
    }
    this.router.navigateByUrl('/threads/threadlist/' +  this.page + "/" + number);
    this.getThreads();
  }

}
