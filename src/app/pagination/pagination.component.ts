import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() maxNumberOfPages: number;
  @Input() currentPage: number;
 
  @Output() currentPageChange = new EventEmitter<number>();
  constructor(){
 
  }
  ngOnInit(){
 
  }
  // handleFirstButtonClicked(){
  //   this.currentPageChange.emit(0);
  // }
  // handlePrevButtonClicked(){
  //   this.currentPageChange.emit(this.currentPage - 1);
  // }
  // handleLastButtonClicked(){
  //   this.currentPageChange.emit(this.maxNumberOfPages - 1);
  // }
  // handleNextButtonClicked(){
  //   this.currentPageChange.emit(this.currentPage + 1);
  // }
 
  createRangeOfNumbers(length: number): number[]{
    return Array(length).fill(0).map((_, index) => index);
  }
  handleButtonClicked(page: number){
    this.currentPageChange.emit(page);
  }
}