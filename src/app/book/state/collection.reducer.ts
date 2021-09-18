import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";



 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    console.log('bookId collectionReduce:',bookId);
    console.log('state:',state)
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  })
);
/*
https://es.javascript.info/array-methods
el método indexOf() éste nos ofrecerá el primer índice en el que se puede
 encontrar un elemento dado en el array, ó
 en su defecto retornará el valor -1 si el elemento no está presente.
 . Por defecto comienza en  0 la busqueda
*/