import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  items: any[] = [];
  loading: boolean;

  constructor(public users: UsersService,
              public title: Title) {
  }

  ngOnInit() {
    this.index();
    this.setTitle();
  }

  index() {
    this.loading = true;
    this.users.index().subscribe(
      (res: any) => {
        const {results} = res;
        this.items = results;
        this.loading = false;
      }
    );
  }

  setTitle() {
    this.title.setTitle(`Users`);
  }

}
