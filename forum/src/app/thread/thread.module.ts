import { ThreadService } from './../shared/services/thread.service';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadRoutingModule } from './thread-routing.module';
import { ThreadComponent } from './thread.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';



@NgModule({
  declarations: [
    ThreadComponent,
    ThreadListComponent,
    ThreadDetailComponent
  ],
  imports: [
    CommonModule,
    ThreadRoutingModule,
  ],
   providers: [
    ThreadService
  ]
})
export class ThreadModule { }
