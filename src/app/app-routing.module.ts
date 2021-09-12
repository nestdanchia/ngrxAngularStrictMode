import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[{ path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
{ path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }