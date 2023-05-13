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
import { InitiativesComponent } from './initiatives/initiatives.component';
import { CsrComponent } from './csr/csr.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { DonateComponent } from './donate/donate.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { PublicationsComponent } from './publications/publications.component';
import { AntyodayaComponent } from './antyodaya/antyodaya.component';


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
      { path: "covid19", component: Covid19Component},
      { path: "covid19-initiatives", component: InitiativesComponent},
      { path: "knowledge-csr", component: CsrComponent},
      { path: "getinvolved", component: GetInvolvedComponent},
      { path: "donate", component: DonateComponent},
      { path: "membership", component: MembershipComponent},
      { path: "contact", component: ContactComponent},
      { path: "knowledge-publications", component: PublicationsComponent},
      { path: "knowledge-antyodaya", component: AntyodayaComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

