import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Comment} from "./comment.model"

interface ApiCreateNewComment{
  id: number;
  content: string;
  postId: number;
}

@Injectable({providedIn: "root"})
export class CommentService {
  constructor(private http: HttpClient) {
  }

  newCommentEvent = new EventEmitter<Comment>;

  switchedReplyEvent = new EventEmitter<number>;

  public createCommentUrl: string = 'http://adamjurczblog.com/api/v1/commentary/'

  addComment(commentData: {content: string}, postId: number): Observable<Comment> {
    const newCreateCommentUrl = this.createCommentUrl + postId.toString();
    return this.http.post<ApiCreateNewComment>(newCreateCommentUrl, commentData)
      .pipe(map(response => new Comment(
        response.id,
        response.content,
        response.postId,
        true
      )))
  };
}
