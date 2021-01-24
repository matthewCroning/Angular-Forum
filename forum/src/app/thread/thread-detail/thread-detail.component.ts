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

  thread;
  loaded = false;
  constructor(private ThreadService:ThreadService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      ThreadService.getThread(params['id']).subscribe((thread) => {
        console.log("thread = ");
        console.log(thread);
        console.log(thread[0].user);
        this.thread = thread[0];
        this.loaded = true;
      });;
    });
   }

  ngOnInit() {
  }

}
