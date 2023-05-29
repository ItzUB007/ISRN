import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service'

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent implements OnInit {

  constructor(private db: DbService) { }

  slider1:any;
  slider2:any;


  ngOnInit(): void {

    this.db.getAgricultureSlider1().subscribe(data=>{
      this.slider1 = data;
    })

    this.db.getAgricultureSlider2().subscribe(data=>{
      this.slider2 = data;
    })

  }

}
