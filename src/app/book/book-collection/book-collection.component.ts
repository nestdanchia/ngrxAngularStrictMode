import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../model/books.model';
//import { Book } from './../model/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
  @Input()
  books!:Book[] |null
  // Array<Book>
  @Output() remove = new EventEmitter();
  constructor() { 
    
    
  }

  ngOnInit(): void {
  }
  removi(data:Book){
    console.log('BookCollectionComponent book id remove:',data.id)
    this.remove.emit(data.id)
  }

}
