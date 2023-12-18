import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {"path":"adduser",component:AddUserComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  {"path":"login",component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
