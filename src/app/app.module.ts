import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { PostsComponent } from './posts/posts.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { NgOptimizedImage }  from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PostInputComponent } from './post-input/post-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    PostsComponent,
    CommentItemComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
