import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Post} from "./post.model";
import {Comment} from "../comment-item/comment.model"
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

interface ApiGetAllResponse {
  posts: ApiGetPost[];
}

interface ApiGetPost {
  id: number;
  creatorName: string;
  content: string;
  commentaries: ApiComment[];
}

interface ApiComment {
  id: number;
  content: string;
  postId: number;
  valid: boolean;
}

interface ApiCreateNewPost {
  id: number;
  creatorName: string;
  content: string;
}

@Injectable({providedIn: "root"})
export class PostService {
  constructor(private http: HttpClient) {
  }

  newPostEvent = new EventEmitter<Post>();

  public getPostsUrl: string = 'http://adamjurczblog.com/api/v1/queries/posts';
  public createPostUrl: string = 'http://adamjurczblog.com/api/v1/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<ApiGetAllResponse>(this.getPostsUrl)
      .pipe(
        map(response => {
          const postsArray = response.posts;
          if (!Array.isArray(postsArray)) {
            throw new Error("Posts data is not an array!");
          }
          return postsArray.map(postJson => new Post(
            postJson.id,
            postJson.creatorName,
            postJson.content,
            postJson.commentaries.map((commentJson: ApiComment) => new Comment(
              commentJson.id,
              commentJson.content,
              commentJson.postId,
              commentJson.valid
            ))
          ))
        })
      );
  }

  addPost(postData: {creatorName: string; content: string}): Observable<Post> {
    return this.http.post<ApiCreateNewPost>(this.createPostUrl, postData)
      .pipe(
        map(response => new Post(
          response.id,
          response.creatorName,
          response.content,
          []
          )
        )
      )
  };

}
