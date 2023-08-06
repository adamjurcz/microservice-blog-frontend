export class Comment{
  public id: number;
  public content: string;
  public postId: number;
  public isValid: boolean;
  constructor(id: number, content: string, postId: number, isValid: boolean) {
    this.id = id;
    this.content = content;
    this.postId = postId;
    this.isValid = isValid;
  }
}
