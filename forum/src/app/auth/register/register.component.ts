import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  
  constructor(private router: Router, private AuthService: AuthService) { }

  ngOnInit() {
  }

  register(){
    // this.user.username = "hello";
    // this.user.email = "hello@email.com";
    // this.user.password = "testtest";
    // this.user.passwordConfirmation = "testtest";
    this.AuthService.register(this.user).subscribe(
      (data) => {
        console.log(data);
        if(data.registered == true){
          this.router.navigate(['/login', {email: this.user.email}]);
        }
    })
  }

}
