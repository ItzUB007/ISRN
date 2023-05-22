import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-whatwedo-training-programs',
  templateUrl: './whatwedo-training-programs.component.html',
  styleUrls: ['./whatwedo-training-programs.component.scss']
})
export class WhatwedoTrainingProgramsComponent implements OnInit {

  constructor(private db: DbService) { }

  trainingProgram:any;


  ngOnInit(): void {


    this.db.getTrainingPrograms().subscribe((data:any)=>{
      this.trainingProgram = data;
    })

  }

}
