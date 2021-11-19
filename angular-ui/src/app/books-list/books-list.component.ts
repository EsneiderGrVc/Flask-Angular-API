import { Component, OnInit } from '@angular/core';

import { BooksApiService } from '../books-api.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  entries: Book[] = [];
  constructor(private booksApiService: BooksApiService) { }

  ngOnInit(): void {
    this.booksApiService.getData().subscribe(data => {
      console.log("hello book-list")
      this.entries = data;
      console.log(this.entries)
    })
  }
}
