import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
// https://stackoverflow.com/questions/66820549/angular-in-strict-mode-with-ngrx

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
