import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-c20',
  templateUrl: './c20.component.html',
  styleUrls: ['./c20.component.scss']
})
export class C20Component implements OnInit {

  constructor(private db:DbService) { }

  slider:any;

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getC20Slider().subscribe(data=>{
      this.slider = data;
    })

    this.db.getBannersC20().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });


  }

}
