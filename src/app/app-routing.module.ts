import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { RoutePath } from './models/route-path.enum';

const routes: Routes = [
  {
    path: RoutePath.LOGIN,
    loadChildren: () =>
      import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/main/main.module').then(m => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
