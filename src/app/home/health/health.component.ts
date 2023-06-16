import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private db: DbService) { }

  slider1:any;
  slider2:any;
  slider3:any;
  slider4:any;

  ngOnInit(): void {

    this.db.getHealthSlider().subscribe((data:any)=>{
      this.slider1 = data;
    })

    this.db.getHealthSlider2().subscribe((data:any)=>{
      this.slider2 = data;
    })

    this.db.getHealthSlider3().subscribe((data:any)=>{
      this.slider3 = data;
    })

    this.db.getHealthSlider4().subscribe((data:any)=>{
      this.slider4 = data;
    })

  }

}
