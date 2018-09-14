import { RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: 'home', loadChildren: './components/admin/header/header.module#HeaderModule' },
  { path: '**', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
