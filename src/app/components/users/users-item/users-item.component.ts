import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.scss']
})
export class UsersItemComponent implements OnInit {
  item: any;
  loading: boolean;

  constructor(public users: UsersService,
              public title: Title) {
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.loading = true;
    this.users.get().subscribe(
      (res: any) => {
        const {results} = res;
        this.item = results[0];
        this.loading = false;
        this.setTitle();
      }
    );
  }

  setTitle() {
    const {first} = this.item.name;
    this.title.setTitle(first);
  }

  add() {
    this.users.store().subscribe();
  }

}
