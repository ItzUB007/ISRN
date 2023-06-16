import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl: any

  ngOnInit(): void {

    this.db.getBannersMembership().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

  }

}
