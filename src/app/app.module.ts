import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
 
import { AppComponent } from './app.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { PaginationComponent } from './pagination/pagination.component';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, BookGridComponent, PaginationComponent ], // HelloComponent,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }