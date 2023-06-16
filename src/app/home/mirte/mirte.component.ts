import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-mirte',
  templateUrl: './mirte.component.html',
  styleUrls: ['./mirte.component.scss']
})
export class MIRTEComponent implements OnInit {

  constructor(private db:DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersMrite().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

  }

}
