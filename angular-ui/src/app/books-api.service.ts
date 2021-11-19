import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book'; 

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor(private httpClient: HttpClient) {
  }
  getData(){
    return this.httpClient.get<Book[]>('http://localhost:3000/')
  }
}
