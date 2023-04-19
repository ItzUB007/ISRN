import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { EducationComponent } from './education/education.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { HealthComponent } from './health/health.component';
import { NGOClinicComponent } from './ngoclinic/ngoclinic.component';
import { Covid19Component } from './covid19/covid19.component';



@NgModule({
  declarations: [
    LandingComponent,
    HomeViewComponent,
    WhoWeAreComponent,
    WhatwedoComponent,
    EducationComponent,
    AgricultureComponent,
    HealthComponent,
    NGOClinicComponent,
    Covid19Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FullCalendarModule
  ],
  bootstrap: [LandingComponent]
})
export class HomeModule { }
