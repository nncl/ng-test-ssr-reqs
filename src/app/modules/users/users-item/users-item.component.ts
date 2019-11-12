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
  asyncRequestDone: boolean;

  constructor(public users: UsersService,
              public title: Title) {
  }

  ngOnInit() {
    this.get();
    this.getAsync();
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

  getAsync() {
    const arr = Array.from(Array(10).keys());
    arr.map((item) => {
      this.users.getAsync(item).subscribe(
        res => console.log(`Async request done`, res)
      );
    });
  }

  setTitle() {
    const {first} = this.item.name;
    this.title.setTitle(first);
  }

  add() {
    this.users.store().subscribe();
  }

}
