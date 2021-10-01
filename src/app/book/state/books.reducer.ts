

import { createReducer, on } from "@ngrx/store";
import { Book } from "../model/books.model";
import { AppState } from "./book.state";

import { retrievedBookList, successBookLoad } from "./books.actions";


// typado ejemplo https://www.thisdot.co/blog/strong-typing-the-state-and-actions-in-ngrx

export const initialState: Array<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(
    retrievedBookList,
    (state, { Book }) => [...Book]
    )
   
);



