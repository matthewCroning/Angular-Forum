import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thread } from 'src/app/shared/models/thread.model';
import { ThreadService } from './../../shared/services/thread.service';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
  styleUrls: ['./thread-detail.component.scss']
})
export class ThreadDetailComponent implements OnInit {

  thread: Thread;
  
  constructor(private ThreadService:ThreadService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      ThreadService.getThread(params['id']).subscribe((thread: Thread) => {
        console.log(thread);
        this.thread = thread;
      });;
    });
   }

  ngOnInit() {
  }

}
