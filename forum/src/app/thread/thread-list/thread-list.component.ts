import { ThreadService } from './../../shared/services/thread.service';
import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/shared/models/thread.model';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  threads: Thread[];
  
  constructor(private ThreadService:ThreadService) {
    this.ThreadService.getThreads().subscribe((threads: Thread[]) => {
      console.log(threads);
      this.threads = threads;
    });
   }

  ngOnInit() {
  }

}
