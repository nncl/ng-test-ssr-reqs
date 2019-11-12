import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UsersListComponent, UsersItemComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
