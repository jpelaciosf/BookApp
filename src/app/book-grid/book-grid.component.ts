import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';
 
@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit{
  
  @Input() books: Book[];
  
  constructor(){
 
  }
  ngOnInit(){
    
  }
}
