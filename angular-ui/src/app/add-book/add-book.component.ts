import { Component, OnInit } from '@angular/core';

import { BooksApiService } from '../books-api.service';
import { NewBook } from '../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: NewBook = new NewBook();
  read: string = '';
  alert = false;
  hidden = true;
  constructor(private booksApiService: BooksApiService) { }
  
  ngOnInit(): void {
  }
  
  showForm(): void {
    this.hidden = !this.hidden
  }

  addBook() {
    if (this.read.toLowerCase() === "yes"){
      this.book.read = true;
    } else if (this.read.toLowerCase() === "no"){
      this.book.read = false;
    } else {
      this.alert = !this.alert;
      return;
    }
    this.booksApiService.addBook(this.book).subscribe()
    window.location.reload()
  }
}
