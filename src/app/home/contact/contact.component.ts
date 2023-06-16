import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersContactUs().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });
  }

}
