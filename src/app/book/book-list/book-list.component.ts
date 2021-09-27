import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { Book } from '../model/books.model';
import { Book } from './../model/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  //books =[{id:'',volumeInfo:{title:'',authors:[]}}]
  @Input()
  books!: Array<Book>| null |undefined
  //books =[{id:'',volumeInfo:{title:'',authors:[]}}]
    
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 addi(data:Book){
   console.log('data.id',data.id)
this.add.emit(data.id)
 }
}
// https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/