import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DbService } from '../../Services/db.service';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {

  constructor(private db: DbService, private activatedRoute: ActivatedRoute) { }

  blog!: any;
  blogId: any;

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
    this.blogId = params["blogid"];
    });

    this.db.getBlogsById(this.blogId).subscribe((blog:any) => {
      this.blog = blog;
    });





  }

}
