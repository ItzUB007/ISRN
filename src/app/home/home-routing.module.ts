import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { LandingComponent } from './landing/landing.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { EducationComponent } from './education/education.component';
import { AgricultureComponent } from './agriculture/agriculture.component';


const routes: Routes = [
  { 
    path: "", component: LandingComponent,
    children: [
      { path: "", component: HomeViewComponent},
      { path: "whoweare", component: WhoWeAreComponent},
      { path: "whatwedo", component: WhatwedoComponent},
      { path: "whatwedo-education", component: EducationComponent},
      { path: "whatwedo-agriculture", component: AgricultureComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
