import { Thread } from './thread.model';

export class Post{
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    thread: Thread;
}
  