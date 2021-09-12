import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './service/books.service';
import { addBook, removeBook } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { Observable } from 'rxjs';
import { Book } from './model/books.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books$:Observable<Book[]> = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
 
  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
  }

}
