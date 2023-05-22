import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';


@Component({
  selector: 'app-members-directory',
  templateUrl: './members-directory.component.html',
  styleUrls: ['./members-directory.component.scss']
})
export class MembersDirectoryComponent implements OnInit {

  constructor(private db: DbService) { }

  Name:any;
  ThematicArea:any;
  inputName:any;
  inputArea:any;


  members:any = [
    /*{
      Name: 'Utkarsh',
      ThematicArea: 'Delhi',
      State: 'State'
    },
    {
      Name: 'Joker',
      ThematicArea: 'Mumbai',
      State: 'State'
    },
    {
      Name: 'Rishi',
      ThematicArea: 'Delhi',
      State: 'State'
    },
    {
      Name: 'Hunny',
      ThematicArea: 'Delhi',
      State: 'State'
    },*/
  ]

  searchedMembers:any;// = this.members;

  ngOnInit(): void { 


    this.db.getMembersDirectory().subscribe(data=>{
      this.members= data;
      this.searchedMembers = data;
    })

    this.inputName = document.querySelector('.inputName');
    this.inputArea = document.querySelector('.inputArea');

    this.inputName.addEventListener('input', (e:any)=>{
      this.searchedMembers = this.members.filter((data:any) => {
        return data.Name.toLowerCase().includes(e.target.value.toLowerCase())
      });
    })

    this.inputArea.addEventListener('input', (e:any)=>{
      this.searchedMembers = this.members.filter((data:any) => {
        return data.ThematicArea.toLowerCase().includes(e.target.value.toLowerCase())
      });
    })


  }

  
  

}
