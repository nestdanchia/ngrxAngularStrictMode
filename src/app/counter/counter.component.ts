import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../redux/counter.actions';
//Inject the store into MyCounterComponent and connect 
//the count$ 
//stream to the store's count state.
// flex https://www.juanmacivico87.com/guia-flexbox/
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
   }

  ngOnInit(): void {
  }
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
