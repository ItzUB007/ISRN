import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Services/auth.service";
import { Router } from '@angular/router'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn == true) {
      this.router.navigate(['/dashboard'])
    }
  }

}
