import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';


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
import { InitiativesComponent } from './initiatives/initiatives.component';
import { CsrComponent } from './csr/csr.component';
import { PublicationsComponent } from './publications/publications.component';
import { AntyodayaComponent } from './antyodaya/antyodaya.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { DonateComponent } from './donate/donate.component';
import { MembershipComponent } from './membership/membership.component';
import { ContactComponent } from './contact/contact.component';
import { WhatwedoTrainingProgramsComponent } from './whatwedo-training-programs/whatwedo-training-programs.component';
import { C20Component } from './c20/c20.component';
import { AdvocacyComponent } from './advocacy/advocacy.component';
import { MIRTEComponent } from './mirte/mirte.component';
import { MembersDirectoryComponent } from './members-directory/members-directory.component';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { FPIPVComponent } from './fp-ipv/fp-ipv.component';


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
    Covid19Component,
    InitiativesComponent,
    CsrComponent,
    PublicationsComponent,
    AntyodayaComponent,
    BlogsComponent,
    GetInvolvedComponent,
    DonateComponent,
    MembershipComponent,
    ContactComponent,
    WhatwedoTrainingProgramsComponent,
    C20Component,
    AdvocacyComponent,
    MIRTEComponent,
    MembersDirectoryComponent,
    SingleBlogComponent,
    FPIPVComponent,    
  ],
  imports: [
    PdfViewerModule,
    CommonModule,
    HomeRoutingModule,
    FullCalendarModule,
    FormsModule,
    CountUpModule
  ],
  bootstrap: [LandingComponent]
})
export class HomeModule { }
