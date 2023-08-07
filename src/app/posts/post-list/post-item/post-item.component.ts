import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../post.model";
import {CommentService} from "../../../comment-item/comment.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit{
  @Input() post!: Post;
  @Input() index!: number;

  public imageUrl: string = 'https://www.freeiconspng.com/uploads/person-icon-5.png';

  constructor(private commentService: CommentService){}

  ngOnInit(){
  }

  getIndexClass(){
    return this.index === 0 ? 'd-flex flex-start' : 'd-flex flex-start mt-4';
  }

  onReply(){
    this.commentService.switchedReplyEvent.emit(this.post.id);
  }
}
