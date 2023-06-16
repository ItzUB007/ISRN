import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.scss']
})
export class WhatwedoComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersWhatWeDo().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

  }

}
