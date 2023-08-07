import {Component, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {Comment} from "../../comment-item/comment.model"
import {PostService} from "../post.service";
import {CommentService} from "../../comment-item/comment.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts!: Post[];

  constructor(private postService: PostService, private commentService: CommentService) {
    this.postService.newPostEvent.subscribe((post: Post) => {
      this.posts.unshift(post);
    });
    this.commentService.newCommentEvent.subscribe((comment: Comment) => {
      this.addCommentToPost(comment);
    })
  };


  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.sort((a, b) => (a.id > b.id ? -1 : 1));
    });
  }

  addCommentToPost(comment: Comment){
    const post = this.posts.find(p => p.id === comment.postId);
    if(post){
      post.commentaries.push(comment);
    }
  }
}
