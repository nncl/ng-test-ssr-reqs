import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersItemComponent } from './users-item/users-item.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: ':id', component: UsersItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
