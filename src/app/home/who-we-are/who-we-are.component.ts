import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  constructor(public db:DbService) { 
   }

  governing: any;
  advisory:any;
  meetourteam:any;
  governBoardMember:any;
  advisoryBoardMamber:any;
  MeetOurTeamMember:any;
  interns:any;

  BannerUrl:any


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

    this.db.getBannersWhoWeAre().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

    this.governing = document.querySelector('.governing');
    this.advisory = document.querySelector('.advisory');
    this.meetourteam = document.querySelector('.meetourteam');

    this.db.getGoverningBoard().subscribe((data:any)=>{
      data.sort((a:any,b:any)=>{
        return a.Position - b.Position;
      })
      this.governBoardMember = data;
    })

    this.db.getAdvisoryBoard().subscribe((data:any)=>{
      data.sort((a:any,b:any)=>{
        return a.Position - b.Position;
      })
      this.advisoryBoardMamber = data;
    })

    this.db.getMeetOurTeam().subscribe((data:any)=>{
      data.sort((a:any,b:any)=>{
        return a.Position - b.Position;
      })
      this.MeetOurTeamMember = data;
    })

    this.db.getInterns().subscribe((data:any)=>{
      data.sort((a:any,b:any)=>{
        return a.Position - b.Position;
      })
      this.interns = data;
    })

    
  }

}
