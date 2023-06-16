import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-fp-ipv',
  templateUrl: './fp-ipv.component.html',
  styleUrls: ['./fp-ipv.component.scss']
})
export class FPIPVComponent implements OnInit {

  constructor(private db: DbService) { }

  Gallery:any;
  mainBanner: any;

  ngOnInit(): void {

    this.db.getFPIPVGallery().subscribe(data=>{
      this.Gallery = data;
    })


    this.db.getBannersFPIPV().subscribe((data:any)=>{
      this.mainBanner = data.ImageUrl;
    })

  }

}
