import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from "../posts/post.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent implements OnInit{
  @ViewChild('f') createPostForm!: NgForm;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  onAddPost(){
    const value = this.createPostForm.value;
    const content = value.content;
    const creatorName = "Adam Jurcz";

    this.postService.addPost({creatorName, content}).subscribe(post => {
      this.postService.newPostEvent.emit(post);
      this.createPostForm.reset();
    });
  }
}
