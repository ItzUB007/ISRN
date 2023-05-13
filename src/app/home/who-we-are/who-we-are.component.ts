import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  constructor() { }

  governing: any;
  advisory:any;
  meetourteam:any;


  getGoverning(){ 

    console.log("jjjjjjjjjjjjjjjj")
    this.governing.classList.remove('hide');
    this.advisory.classList.add('hide');
    this.meetourteam.classList.add('hide');
  }
  
  getAdvisory(){
    this.advisory.classList.remove('hide');
    this.governing.classList.add('hide');
    this.meetourteam.classList.add('hide');
  }

  getMeetOurTeam(){
    this.meetourteam.classList.remove('hide');
    this.governing.classList.add('hide');
    this.advisory.classList.add('hide');
  }

  ngOnInit(): void {

    this.governing = document.querySelector('.governing');
    this.advisory = document.querySelector('.advisory');
    this.meetourteam = document.querySelector('.meetourteam');


    
  }

}
