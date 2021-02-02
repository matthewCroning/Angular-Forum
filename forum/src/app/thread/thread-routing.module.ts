import { ThreadCreateComponent } from './thread-create/thread-create.component';
import { ThreadComponent } from './thread.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { AuthGuard } from '../shared/interceptor/auth.guard';


const routes: Routes = [
 {
  path: '',
  component: ThreadComponent,
  children: [
    { path: '', redirectTo: 'threadlist', pathMatch: 'full' },
    { path: 'threadlist', component: ThreadListComponent, pathMatch: 'full'},
    { path: 'threadlist/:page', component: ThreadListComponent, pathMatch: 'full'},
    { path: 'threadlist/:page/:view', component: ThreadListComponent, pathMatch: 'full'},
    { path: 'threadlist/:page/:view', component: ThreadListComponent, pathMatch: 'full'},
    { path: 'create', component: ThreadCreateComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    { path: ':id', component: ThreadDetailComponent},
  ]
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ThreadRoutingModule { }
