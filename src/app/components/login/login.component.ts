import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  username: string;
  password: string;

  res: string;

  ngOnInit() {
    this.auth.validateLogin();
  }

  login() {
    if (this.username === '' || this.username == null || this.password === '' || this.password == null) {
      swal('Warning', 'Complete the fields', 'warning');
    } else {
      const data = {
        username: this.username,
        password: this.password
      };
      this.auth.login(data).subscribe((res: any) => {
        localStorage.setItem('token', res.json().access_token);
        this.router.navigate(['home/dash']);
        swal('Welcome to SchoolSystem', 'Hello', 'success');
      },
      (res: any) => {
        swal('Error', res.json().error, 'error');
      });
    }
  }

}
