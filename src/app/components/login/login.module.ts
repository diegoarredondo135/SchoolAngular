import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes =  [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {

}
