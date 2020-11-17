import { Post } from './post.model';
import { Thread } from './thread.model';

export class User{
    _id: string;
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    createdAt: string;
    thread: Thread;
    posts: Post[];
  }
  