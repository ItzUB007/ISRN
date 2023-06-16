import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl: any;

  ngOnInit(): void {

    this.db.getBannersGetInvolved().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });
  }
}
