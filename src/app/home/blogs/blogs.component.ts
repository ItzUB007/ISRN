import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private db:DbService) { }

  blogs:any;
  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBlogs().subscribe((data:any)=>{
      this.blogs = data;
    })

    this.db.getBannersBlogs().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

  }

}
