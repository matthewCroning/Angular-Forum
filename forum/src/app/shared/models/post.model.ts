import { Thread } from './thread.model';
import { User } from './user.model';

export class Post{
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    thread: Thread;
    user: User;
}
  