import { ThreadCreateComponent } from './thread/thread-create/thread-create.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadListComponent } from './thread/thread-list/thread-list.component';
import { ThreadComponent } from './thread/thread.component';
import { AuthGuard } from './shared/interceptor/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes: Routes = [
  { path: '',
    redirectTo: '/threads/threadlist',
    pathMatch: 'full',
  },
  { 
    path: 'threads', 
    loadChildren: () => import('./thread/thread.module').then(mod => mod.ThreadModule)
  },
  { 
    path: 'users', 
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)
  },
  
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
