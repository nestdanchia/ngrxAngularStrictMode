import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Book } from "../model/books.model";
import { AppState } from "./book.state";


export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Book[]) => books
);

export const selectCollectionState = createFeatureSelector<
  AppState ,
string[]
>("collection");
/*
export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
      {
        let collect: (Book | undefined)[] = collection.map((id) =>
          books.find((book) => book.id === id)
        );
        let result = collect.filter<Book>(isNotNullOrUndefined);
        return result;
      }
    }
  );
  
  export function isNotNullOrUndefined<T>(
    input: null | undefined | T
  ): input is T {
    return input != null;
  }
  */
  

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Book[], collection: string[] )=> {
    return collection.map((id) => books.find((book) => { book.id === id && book.id !== undefined; console.log('book', book); }
    ) as unknown as Book);
  }
);

//The selectors need to change because the type Book | undefined is not the same as the type Book in strict mode. Therefore, you need to use solutions as outlined in the comments here: https://github.com/microsoft/TypeScript/issues/16069.

//That's where I found the isNotNullOrUndefined function.

/*
// https://stackoverflow.com/questions/66820549/angular-in-strict-mode-with-ngrx

*/
