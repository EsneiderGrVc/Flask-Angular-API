import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book-interface';
import { NewBook } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient: HttpClient) { }
  getData(){
    return this.httpClient.get<Book[]>('http://localhost:3000/')
  }
  addBook(book: NewBook){
    return this.httpClient.post<NewBook>('http://localhost:3000/add', book)
  }

}
