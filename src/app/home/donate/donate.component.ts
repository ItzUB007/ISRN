import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersDonate().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });


  }

}
