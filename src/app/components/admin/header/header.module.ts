import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { PaginatorComponent } from '../paginator/paginator.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { DepartmentsComponent } from '../departments/departments.component';

const HOME_ROUTES: Routes =  [
  { path: '', component: HeaderComponent, children: [
    { path: 'dash', component: HomeComponent },
    { path: 'departments', component: DepartmentsComponent }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    MomentModule,
    RouterModule.forChild(HOME_ROUTES),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    DepartmentsComponent,
    PaginatorComponent,
    FooterComponent
  ]
})
export class HeaderModule {}
