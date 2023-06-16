import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss']
})
export class InitiativesComponent implements OnInit {

  constructor(private db: DbService) { }

  BannerUrl:any;

  ngOnInit(): void {

    this.db.getBannersISRNInitiatives().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });


  }

}
