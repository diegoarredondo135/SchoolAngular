import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.auth.validate();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    swal('Goodbye User', 'Come back soon', 'success');
  }

}
