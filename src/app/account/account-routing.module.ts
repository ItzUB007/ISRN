import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AnnualReportsComponent } from './annual-reports/annual-reports.component';
import { CompendiumComponent } from './compendium/compendium.component';
import { NewlettersComponent } from './newletters/newletters.component';


const routes: Routes = [
  { path: "", component: DashboardComponent,
    children: [
      { path: "", component: ProfileComponent },
      { path: "annualreports", component: AnnualReportsComponent },
      { path: "compendium", component: CompendiumComponent },
      { path: "newsletters", component: NewlettersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
