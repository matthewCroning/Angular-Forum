import { ThreadComponent } from './thread.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';


const routes: Routes = [
 {
  path: '',
  component: ThreadComponent,
  children: [
    { path: '', redirectTo: 'threadlist', pathMatch: 'full' },
    { path: 'threadlist', component: ThreadListComponent, pathMatch: 'full'},
    { path: ':id', component: ThreadDetailComponent},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadRoutingModule { }
