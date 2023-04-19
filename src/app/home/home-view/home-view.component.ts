import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';





declare var $: any;

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  
  
  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'},
    dateClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { title: 'event 1', date: '2023-05-01' },
      { title: 'event 2', date: '2023-04-19' }
    ],
    eventColor: '#fc5e28'
  };

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }

  popUp:any;
  org:any;
  bene:any;
  country:any;


  cross(){
    this.popUp?.classList.add('fadeout');
  }

  ngOnInit(): void {

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
        this.bene = 17;
        this.org = 90;

      });
    });

    

    

    // Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer:any;
function cycleTestimonials(index:any) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
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
    document.querySelector(".testimonials")?.addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);

    
  }
  

}
