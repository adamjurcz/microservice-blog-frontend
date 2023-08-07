import { Component } from '@angular/core';
import {CommentService} from "../comment-item/comment.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  isCommentSectionActivated: boolean = false;
  postId: number = -1;

  constructor(private commentService: CommentService) {
    this.commentService.switchedReplyEvent.subscribe((value: number) => {
      this.postId = value;
      this.isCommentSectionActivated = value >= 0;
    })
  }
}
