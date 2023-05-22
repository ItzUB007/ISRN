import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  navbar:any;
  navItems:any;
  //navitem:any;

  ngOnInit(): void {
    

    /*this.navItems = document.querySelectorAll('.nav-item');
    console.log(this.navItems)

    this.navItems.forEach((data:any)=>{
      data.addEventListener('click', (e:any)=>{
        data.classList.add('nav-item');
      })
    })*/

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
