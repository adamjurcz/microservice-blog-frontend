import {Component, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {PostService} from "../post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts!: Post[];

  constructor(private postService: PostService) {
    this.postService.newPostEvent.subscribe((post: Post) => {
      this.posts.unshift(post);
    });
  }


  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.sort((a, b) => (a.id > b.id ? -1 : 1));
    });
  }
}
