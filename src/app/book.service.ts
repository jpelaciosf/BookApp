import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
 
@Injectable({
  providedIn: 'root'
})
 
export class BookService{
  private bookUrl = 'https://jsonblob.com/api/456479a7-302f-11ea-893e-9d0b7a7dd72d';
  constructor(private httpClient: HttpClient){}
 
  async getBooks(): Promise<Book[]> {
    const data = await this.httpClient.get<{data: Book[]}>(this.bookUrl).toPromise();
 
    return data.data;
  }
}