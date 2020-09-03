import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from 'src/app/interfaces/common.types';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postInfomation: PostInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
