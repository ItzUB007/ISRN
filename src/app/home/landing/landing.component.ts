import { Component, OnInit } from '@angular/core';
import { DbService } from '../../Services/db.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private db: DbService) { }

  navbar:any;
  navItems:any;
  //navitem:any;

  ngOnInit(): void {

    const topetc = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('fadeinAnimationClass');
        }
      });
    });

    topetc.observe(document.querySelector('.topetc')!);

    

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

    /*document.querySelector('.getInvolvedTag')?.addEventListener('mouseenter', (event)=>{
      document.querySelector('.getInvolvedDD')?.classList.toggle('hide');
    })

    document.querySelector('.getInvolvedDD')?.addEventListener('mouseleave', (event)=>{
      document.querySelector('.getInvolvedDD')?.classList.toggle('hide');
    })

    document.querySelector('.getInvolvedTag')?.addEventListener('mouseleave', (event)=>{
      document.querySelector('.getInvolvedDD')?.classList.toggle('hide');
    })*/

  }

  


}
