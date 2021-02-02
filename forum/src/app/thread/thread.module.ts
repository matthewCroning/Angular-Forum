import { PostDetailComponent } from './../post/post-detail/post-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThreadService } from './../shared/services/thread.service';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadRoutingModule } from './thread-routing.module';
import { ThreadComponent } from './thread.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { CreatePostComponent } from '../post/create-post/create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThreadCreateComponent } from './thread-create/thread-create.component';
import { TokenInterceptor } from '../shared/interceptor/token.interceptor';
import { ThreadSearchComponent } from './thread-search/thread-search.component';



@NgModule({
  declarations: [
    ThreadComponent,
    ThreadListComponent,
    ThreadDetailComponent,
    CreatePostComponent,
    ThreadCreateComponent,
    PostDetailComponent,
    ThreadSearchComponent
  ],
  imports: [
    CommonModule,
    ThreadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
   providers: [
    ThreadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ThreadModule { }
