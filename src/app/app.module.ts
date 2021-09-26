import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//import { counterReducer } from './redux/counter.reducer';
// https://github.com/nestdanchia/ngrxAngularStrictMode
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './book/state/books.reducer';
import { collectionReducer } from './book/state/collection.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//import { MatButtonModule } from '@angular/material/button';
//import { MatCardModule } from '@angular/material/card';
// null undefine null and undefined are only assignable to unknown, 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// https://www.learmoreseekmore.com/2019/10/angular-state-management-with-ngrx.html
//StoreModule.forRoot({ count: counterReducer })
    //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    /*
    FormsModule,
	 MaterialModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
     HttpClientModule,
     EffectsModule.forRoot([]),
     StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
     BrowserAnimationsModule ,
     import { collectionReducer } from './book/state/collection.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { booksReducer } from './book/state/books.reducer';   
    */