import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GoogleBooksService } from "../service/books.service";
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Book } from './../model/books.model';
import { loadBook, retrievedBookList } from "./books.actions";





@Injectable()

export class SomeEffects {
//https://www.youtube.com/watch?v=-fJwAHSER1g
    constructor(
        private actions$: Actions,
        private BookService: GoogleBooksService) { }
    //'[BookList] Load Book'
    loadBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBook),
            mergeMap(() => this.BookService.getBooks()
                .pipe(

                    map(data => (
                        retrievedBookList({ Book: data })



                    )

                    ),

                    catchError(eror => of({ type: '[Book] fails book load' }))
                )
            )

        )

    )


}