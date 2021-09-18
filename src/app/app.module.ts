import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { booksReducer } from './book/state/books.reducer';
//import { counterReducer } from './redux/counter.reducer';
// https://github.com/nestdanchia/ngrxAngularStrictMode
import { collectionReducer } from './book/state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
// null undefine null and undefined are only assignable to unknown, 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //StoreModule.forRoot({ count: counterReducer })
    //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
     HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
