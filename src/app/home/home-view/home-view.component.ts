import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { CountUpOptions } from 'countup.js';
import { DbService } from '../../Services/db.service';
import { AngularFirestore } from "@angular/fire/compat/firestore";





declare var $: any;

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})

export class HomeViewComponent implements OnInit {

  constructor(private db: DbService, private firestore: AngularFirestore) { }

  upcomingEventPic:any;

  // Rolling Numbers
  pickANumber = 500;
  endVal = 1000;
  endVal2 = 25000;
  opts: CountUpOptions = {
    enableScrollSpy: true,
  };

  doThisOnComplete() {
    console.log('complete!');
  }

  applyEndVal() {
    this.endVal = Number(this.pickANumber);
  }

  useOptions() {
    this.opts = {
      decimalPlaces: 2,
      separator: ':',
      duration: 5,
    };
  }

  resetOptions() {
    this.opts = {
      enableScrollSpy: true,
    };
  }

  // End of Rolling Numbers


  //Calender

  EventsData: any = [
    /*{ title: 'event 1', date: '2023-04-01' },
    { title: 'event 2', date: '2023-04-19' },*/
  ];

  homePageSlideshow:any;

////////////////////////////////////////////////////////////////////

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: this.EventsData,
    eventColor: '#ffc107'
  };


  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  // End of Calender

  popUp: any;
  org: any;
  bene: any;
  country: any;
  number1: any = 0;
  statesData: any;
  partners:any;


  cross() {
    this.popUp?.classList.add('fadeout');
  }





  ngOnInit(): void {

    this.db.getPartners().subscribe(data=>{
      this.partners = data;
    })


    this.db.getUpcomingEventPic().subscribe((data:any)=>{
      this.upcomingEventPic = data[0];
    })

    this.db.getRollingNumbers().subscribe((data:any)=>{
      this.endVal = data[0].Beneficiaries;
      this.endVal2 = data[0].Members;
    })


    const visionCard = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('fadeinAnimationClass');
        }
      });
    });

    visionCard.observe(document.querySelector('.visionCard')!);

    const goalCard = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('fadeinAnimationClass2');
        }
      });
    });

    goalCard.observe(document.querySelector('.goalCard')!);

    const missionCard = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('fadeinAnimationClass3');
        }
      });
    });

    missionCard.observe(document.querySelector('.missionCard')!);

    



    


    /* let states = [
       { 
         State: "IN-AN",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-AP",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-AR",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-AS",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-BR",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-CH",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-CT",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-DD",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-DL",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-DN",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-GA",
         Bene: 1,
         Org: 2
       },{ 
         State: "IN-GJ",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-HP",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-HR",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-JH",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-JK",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-KA",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-KL",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-LD",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-MH",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-ML",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-MN",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-MP",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-MZ",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-NL",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-OR",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-PB",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-PY",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-RJ",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-SK",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-TG",
         Bene: 1,
         Org: 2
       },
 
       { 
         State: "IN-TN",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-TR",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-UP",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-UT",
         Bene: 1,
         Org: 2
       },
       { 
         State: "IN-WB",
         Bene: 1,
         Org: 2
       },
     ]
 
 
     states.forEach(data=>{
       this.firestore.collection('MapStates').add(data);
     })*/


     this.db.getHomePageSlideshow().subscribe((data:any)=>{
      this.homePageSlideshow = data
     })











    this.db.getCalenderEvents().subscribe((data: any) => {
      data.sort(function(a:any,b:any){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return  new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });

      this.EventsData = data;
      
      this.calendarOptions.events = data;
    })



    // Map Things
    // Getting States

    this.db.getStatesData().subscribe(data => {
      this.statesData = data;
    })


    this.popUp = document.querySelector('.popup_bg');

    const paths = document.querySelectorAll('path');
    paths.forEach(path => {
      path.addEventListener('mouseover', () => {
        console.log(path.getAttribute('title'));
      });
    });

    const path = document.querySelectorAll('path');
    path.forEach(path => {
      path.addEventListener('click', () => {
        this.popUp.classList.remove('fadeout');
        this.popUp.classList.add('fadein');

        this.country = path.getAttribute('title');
        //this.bene = path.getAttribute('bene')
        //console.log(this.statesData);

        let selectedState = this.statesData.filter((data:any) => {
          return data.State == path.getAttribute('id');
        });


        //console.log(selectedState, selectedState[0].Bene, selectedState[0].Org);

        this.bene = selectedState[0].Bene;
        this.org = selectedState[0].Org;

      });
    });

    // End Map things 



    // Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
    var testimonialItems = document.querySelectorAll(".item label");
    var timer: any;
    function cycleTestimonials(index: any) {
      timer = setTimeout(function () {
        var evt;
        if (document.createEvent) {
          //If browser = IE, then polyfill
          evt = document.createEvent('MouseEvent');
          evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        } else {
          //If Browser = modern, then create new MouseEvent
          evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
        }
        var ele = "." + testimonialItems[index].className;
        var ele2 = document.querySelector(ele)
        ele2?.dispatchEvent(evt);
        index++; // Increment the index
        if (index >= testimonialItems.length) {
          index = 0; // Set it back to `0` when it reaches `3`
        }
        cycleTestimonials(index); // recursively call `cycleTestimonials()`
        document.querySelector(".testimonials")?.addEventListener("click", function () {
          clearTimeout(timer); //stop the carousel when someone clicks on the div
        });
      }, 2000); //adjust scroll speed in miliseconds
    }
    //run the function
    cycleTestimonials(0);


  }


}
