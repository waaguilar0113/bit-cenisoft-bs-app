import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books = [
    {
      _id: 1,
      cover: 'assets/images/book.jpg',
      name: 'The Arrivals',
      description: `Cupidatat laborum deserunt enim veniam amet consequat tempor veniam nulla tempor id dolor mollit. Voluptate non quis sit ea Lorem est magna consectetur. In enim veniam veniam consequat officia incididunt do laborum. Reprehenderit sint amet quis ea do do in culpa irure do proident.`,
        unitValue: 50000
    },
    {
      _id: 1,
      cover: 'assets/images/book.jpg',
      name: 'The Arrivals',
      description: `Cupidatat laborum deserunt enim veniam amet consequat tempor veniam nulla tempor id dolor mollit. Voluptate non quis sit ea Lorem est magna consectetur. In enim veniam veniam consequat officia incididunt do laborum. Reprehenderit sint amet quis ea do do in culpa irure do proident.`,
        unitValue: 50000
    },
    {
      _id: 1,
      cover: 'assets/images/book.jpg',
      name: 'The Arrivals',
      description: `Cupidatat laborum deserunt enim veniam amet consequat tempor veniam nulla tempor id dolor mollit. Voluptate non quis sit ea Lorem est magna consectetur. In enim veniam veniam consequat officia incididunt do laborum. Reprehenderit sint amet quis ea do do in culpa irure do proident.`,
        unitValue: 50000
    },
    {
      _id: 1,
      cover: 'assets/images/book.jpg',
      name: 'The Arrivals',
      description: `Cupidatat laborum deserunt enim veniam amet consequat tempor veniam nulla tempor id dolor mollit. Voluptate non quis sit ea Lorem est magna consectetur. In enim veniam veniam consequat officia incididunt do laborum. Reprehenderit sint amet quis ea do do in culpa irure do proident.`,
        unitValue: 50000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
