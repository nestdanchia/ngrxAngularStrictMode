import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  { path: '',
   component: BookComponent,
  }
    
/*
    {
      path: 'colection', // child route path
      component: BookCollectionComponent   // child route component that the router renders
    }
*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
