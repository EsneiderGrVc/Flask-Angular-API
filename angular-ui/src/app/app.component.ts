import { Component } from '@angular/core';

import { BooksApiService } from './books-api.service';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-ui';
  entries: Book[] = [];
  constructor(private booksApiService: BooksApiService){
    this.booksApiService.getData().subscribe(data => {
      this.entries = data;
    });
  }
}
