import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersCovid19().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });
  }

}
