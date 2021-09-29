import { createAction, props } from '@ngrx/store';
import { Book } from '../model/books.model';
//import { Book } from '../model/books.model';
//import{Book} from '../model/books.model'

export const loadBook = createAction('[BookList] Load Book');

export const addBook = createAction(
  '[Book List] Add Book',
  props<{   bookId:any }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId:any }>()
);
// Retrieve  recuperar
export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book:any }>()
);

export const successBookLoad = createAction(
  '[Books] successful book load',
  props<{mensaje:string}>()
);

export const failsBookLoad = createAction(
  '[Book] fails book load',
  //props<{ mensaje: string }>()
)