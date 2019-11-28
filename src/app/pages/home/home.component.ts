import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public title: Title,
              public meta: Meta) {
  }

  ngOnInit() {
    this.title.setTitle(`Hello World`);
    this.meta.addTag({name: `description`, content: `Hello World Good Afternoon!`});
  }
}
