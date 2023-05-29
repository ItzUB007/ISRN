import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';



import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NewlettersComponent } from './newletters/newletters.component';
import { AnnualReportsComponent } from './annual-reports/annual-reports.component';
import { CompendiumComponent } from './compendium/compendium.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    NewlettersComponent,
    AnnualReportsComponent,
    CompendiumComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PdfViewerModule
  ]
})
export class AccountModule { }
