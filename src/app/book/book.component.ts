import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './service/books.service';
import { addBook, removeBook, retrievedBookList } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { Observable } from 'rxjs';
import { pipe} from 'rxjs';
import { Book } from './model/books.model';
import { collectionReducer } from './state/collection.reducer';
import { map } from 'rxjs/operators';
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
  books!: Array<Book>

 
  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {
   
    }
  

  ngOnInit() {
    this.colection()
    
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
  colection(){
    this.books$= this.store.pipe(select(selectBooks));
    console.log('this.books',this.books);
 
      this.store.pipe(select(selectBookCollection)).subscribe(
       
         
        (data)=>{
          if(typeof data !=='undefined'){
            this.books=data,console.log('this.books',data)
          }
          
        })
       
      
      }
  }
 


