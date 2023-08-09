import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CommentService} from "../comment-item/comment.service";

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit{
  @ViewChild('f') createCommentForm!: NgForm;

  @Input() postId: number = -1;

  constructor(private commentService: CommentService) {
  }

  ngOnInit(){
  }

  onAddComment() {
    const value = this.createCommentForm.value;
    const postId = this.postId;
    const content = value.content;

    this.commentService.addComment({content}, postId).subscribe(comment => {
      this.commentService.newCommentEvent.emit(comment);
      this.commentService.switchedReplyEvent.emit(-1);
      this.createCommentForm.reset();
    })
  }
}
