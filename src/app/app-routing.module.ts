import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeModule } from './home/home.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthguardGuard } from './Services/authguard.guard';


const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule), canActivate: [AuthguardGuard]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
