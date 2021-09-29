import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
// https://stackoverflow.com/questions/66820549/angular-in-strict-mode-with-ngrx

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  
  ]
})
export class BookModule { }
// https://github.com/iquiroga/effects-app/blob/main/src/app/store/reducers/usuario.reducer.ts
// https://codingpotions.com/angular-material
// https://github.com/DeborahK/Angular-NgRx-GettingStarted
// https://github.com/M-Hamo/NGRX-project