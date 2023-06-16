import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-ngoclinic',
  templateUrl: './ngoclinic.component.html',
  styleUrls: ['./ngoclinic.component.scss']
})
export class NGOClinicComponent implements OnInit {

  constructor(private db: DbService) { }

  slider1: any;

  ngOnInit(): void {

    this.db.getNGOClinicSlider().subscribe((data: any) => {
      this.slider1 = data;
    })

  }

}
