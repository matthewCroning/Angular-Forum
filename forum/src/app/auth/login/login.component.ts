import { AuthService, LoginData } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginData: LoginData = {
    email: '',
    password: ''
  }

  public errors: any = [];

  public notifyMessage: string = "";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private AuthService: AuthService) {}

  ngOnInit() {

  }

  login(data) {
    this.AuthService.login(this.loginData).subscribe((data) => {
      this.router.navigate(['/']);
    }, (invalidResponse: any) => {
      this.errors = invalidResponse.error.errors;
    })
  }

}
