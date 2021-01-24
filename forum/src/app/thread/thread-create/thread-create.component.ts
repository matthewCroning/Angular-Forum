import { ThreadService } from './../../shared/services/thread.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.scss']
})
export class ThreadCreateComponent implements OnInit {

  title = new FormControl('');

  constructor(private router:Router, private threadService: ThreadService) { 
    console.log("thread created now");
  }

  ngOnInit() {
  }

  create(){
    this.threadService.createThread(this.title.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/' + data]);
      })
    
  }

}
