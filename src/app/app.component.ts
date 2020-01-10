import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  allBooks: Book[] = [];
  booksToDisplay: Book[] = [];
  currentPage = 0;
  private recordsPerPage = 10;
 
  constructor(private bookService: BookService) {}
 
ngOnInit(){
  this.getBooks();
}
 
  async getBooks(){
    this.allBooks = await this.bookService.getBooks();
    this.booksToDisplay = this.allBooks;
  }
 
  displayBooks(books: Book[], currentPage: number): Book[]{
return books.slice(currentPage * this.recordsPerPage, (currentPage + 1) * this.recordsPerPage);
  }
 
  getMaxNumberOfPages(books: Book[]): number{
    return Math.floor(books.length / this.recordsPerPage);
  }
  // handleCurrentPage
}