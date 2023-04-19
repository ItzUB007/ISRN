import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { LandingComponent } from './landing/landing.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { EducationComponent } from './education/education.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { HealthComponent } from './health/health.component';
import { NGOClinicComponent } from './ngoclinic/ngoclinic.component';
import { Covid19Component } from './covid19/covid19.component';


const routes: Routes = [
  { 
    path: "", component: LandingComponent,
    children: [
      { path: "", component: HomeViewComponent},
      { path: "whoweare", component: WhoWeAreComponent},
      { path: "whatwedo", component: WhatwedoComponent},
      { path: "whatwedo-education", component: EducationComponent},
      { path: "whatwedo-agriculture", component: AgricultureComponent},
      { path: "whatwedo-health", component: HealthComponent},
      { path: "whatwedo-ngo", component: NGOClinicComponent},
      { path: "covid19", component: Covid19Component}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
