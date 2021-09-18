import { Book } from '../model/books.model';
/*
export interface AppState {
    books: ReadonlyArray<Book>;
    collection: ReadonlyArray<string>;
  }
  */
  export interface AppState {
   
    books: Book[];
    collection:  string[];
  }