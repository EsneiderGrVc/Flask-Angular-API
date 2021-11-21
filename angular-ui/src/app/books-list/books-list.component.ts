import { Component, OnInit } from '@angular/core';

import { BooksApiService } from '../books-api.service';
import { Book } from '../book-interface';
import { DeleteBook } from '../models/delete-book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: DeleteBook = new DeleteBook;
  updateBook: DeleteBook = new DeleteBook;
  hidden = true;

  alert = false;
  id: string = '';
  title: string = '';
  author: string = '';
  read: string = '';

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

  deleteBook(id: string){
    this.books.forEach(book => {
      if (book.id === id) {
        this.selectedBook.id = book.id;
        this.selectedBook.title = book.title;
        this.selectedBook.author = book.author;
        (book.read.toLowerCase() === "yes")
          ? this.selectedBook.read = true
          : this.selectedBook.read = false;
      }
    })
    this.booksApiService.deleteBook(this.selectedBook).subscribe(data => {
      console.log(data)
    })
    window.location.reload()
  }

  editBook(id: string){
    this.updateBook.id = id;
    if (!this.updateBook.title) this.updateBook.title = this.title;
    if (!this.updateBook.author) this.updateBook.author = this.author;
    if (this.updateBook.read.toLowerCase() === "yes") {
      this.updateBook.read = true;
    } else if (this.updateBook.read.toLowerCase() === "no"){
      this.updateBook.read = false;
    } else {
      this.alert = !this.alert;
      return;
    }
    this.booksApiService.editBook(this.updateBook).subscribe();
    window.location.reload();
  }

  abortUpdate(){
    this.hidden = !this.hidden   
  }
  
  showUpdateForm(book: Book): void {
    this.id = book.id
    this.author = book.author
    this.read = book.read
    this.title = book.title
    this.hidden = !this.hidden   
  }
}
