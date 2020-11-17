import { Post } from './post.model';
import { User } from './user.model';

export class Thread{
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  posts: Post[];
  user: User;
}
