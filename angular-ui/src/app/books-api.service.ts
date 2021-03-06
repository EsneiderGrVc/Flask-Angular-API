import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book-interface';
import { NewBook } from './models/book';
import { DeleteBook } from './models/delete-book';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient: HttpClient) { }
  getData(){
    return this.httpClient.get<Book[]>('http://localhost:5000/')
  }
  addBook(book: NewBook){
    return this.httpClient.post<NewBook>('http://localhost:5000/add', book)
  }
  deleteBook(book: DeleteBook) {
    return this.httpClient.delete<DeleteBook>(`http://localhost:5000/delete/${book.id}`)
  }
  editBook(book: DeleteBook){
    return this.httpClient.put<DeleteBook>(`http://localhost:5000/edit/${book.id}`, book)
  }

}
