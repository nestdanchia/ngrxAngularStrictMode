import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './service/books.service';
import { addBook, loadBook, removeBook, retrievedBookList } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { Observable } from 'rxjs';
import { pipe} from 'rxjs';
import { Book } from './model/books.model';

import { map, tap } from 'rxjs/operators';
import { AppState } from './state/book.state';

// https://github.com/nestdanchia/ngrxAngularStrictMode
// error si no se modifica store.d.ts
// declare class Store<T = any> extends Observable<T> implements Observer<Action> {..]
// qe se  declara como class Store<T = Object> extends Observable<T> implements Observer<Action> {
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
// Type 'Book[] | null' is not assignable to type 'Book[]'.
//books!:Book[]
books$!: Observable<Book[]>
  bookCollection$:Observable<Book[]> | undefined
  books!:Book[]
  //Array<Book>

 
  onAdd(bookId: any) {
    console.log('bokId desde book.component :',bookId)
    this.store.dispatch(addBook({ bookId }));
   
  }
 
  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {
    this.books$ = this.store.pipe(tap(()=>console.log('solicito books')),select(selectBooks));
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
  
  }
  ngOnInit() {
   
   /*esto lo hace book.effects.ts
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
      */
      this.colection();

  }

  colection() {
    
this.store.dispatch(loadBook())
    this.store.pipe(select(selectBookCollection)).subscribe(


      (data) => {
        if (typeof data !== 'undefined') {
          this.books = data
//console.log('this.books desde book.component data:' + JSON.stringify(data))
        }

      })


  }
}
 


