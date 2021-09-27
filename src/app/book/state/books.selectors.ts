import { createSelector, createFeatureSelector } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Book } from "../model/books.model";
import { AppState,OrdersState  } from "./book.state";

export const selectOrders = createFeatureSelector<AppState,OrdersState[]>('orders');
export const selectOrderId = createSelector(selectOrders, state => state.map(order=>order.Id));
export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Book[]) => books
);
// https://www.learmoreseekmore.com/2019/10/angular-state-management-with-ngrx.html
export const selectCollectionState = createFeatureSelector<
  AppState, 
string[]
>("collection");
/*
Using selectors it isolates or avoids writing data filtering or 
data modification code in the angular components.
NgRx provides 'createFeatureSelector' it gives a particular state 
in an application based input parameter. 
createFeatureSelect' expects the string parameter whose value need to exactly match with 
'AppState' property name like 'books' and 'orders' collection
Here 'selectBooks' represents 'BookState' and 'selectOrders' represents 'OrderState'. 
  */
  
//;console.log('collection',collection)
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Book[], collection: string[] )=> {
    return collection.map((id) => books.find((book) =>  book.id === id 
    ) ,console.log('collection',collection) )as Book[]
   
    
   
   }
);

//The selectors need to change because the type Book | undefined is not the same as the type Book in strict mode. Therefore, you need to use solutions as outlined in the comments here: https://github.com/microsoft/TypeScript/issues/16069.

//That's where I found the isNotNullOrUndefined function.

/*
// https://stackoverflow.com/questions/66820549/angular-in-strict-mode-with-ngrx

*/

