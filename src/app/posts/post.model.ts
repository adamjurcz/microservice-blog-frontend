import {Comment} from '../comment-item/comment.model'
export class Post{
  public id: number;
  public creatorName: string;
  public content: string;
  public commentaries: Comment[];
  constructor(id: number, creatorName: string, content: string, commentaries: Comment[]) {
    this.id = id;
    this.creatorName = creatorName;
    this.content = content;
    this.commentaries = commentaries;
  }

}
