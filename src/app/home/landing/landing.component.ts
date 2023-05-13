import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  navbar:any;
  //navitem:any;

  ngOnInit(): void {

    this.navbar = document.querySelector('#ftco-navbar');
    /*this.navitem = document.querySelectorAll('.nav-item');


    this.navitem.forEach((element:any) => {
      
      element.addEventListener('click',()=>{
        element.classList.add('active');
      })

    });*/


    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      if (currentScroll > 200) {
        this.navbar?.classList.add('navbarOnTop');
      }

      if(currentScroll <= 200){
        this.navbar?.classList.remove('navbarOnTop');
      }


    });


  }
}
