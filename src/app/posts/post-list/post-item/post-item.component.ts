import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../post.model";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit{
  @Input() post!: Post;
  @Input() index!: number;

  public imageUrl: string = 'https://www.freeiconspng.com/uploads/person-icon-5.png';

  constructor(){}

  ngOnInit(){
    console.log(this.index);
  }

  getIndexClass(){
    return this.index === 0 ? 'd-flex flex-start' : 'd-flex flex-start mt-4';
  }
}
