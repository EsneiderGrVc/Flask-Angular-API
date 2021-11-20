import { Component, OnInit } from '@angular/core';

import { BooksApiService } from '../books-api.service';
import { Book } from '../book-interface';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksApiService: BooksApiService) { }

  ngOnInit(): void {
    this.booksApiService.getData().subscribe(data => {
      data.forEach(e => {
        (e.read)
          ? e.read = "Yes"
          : e.read = "No"
        this.books.push(e)
      })
    })
  }
}
