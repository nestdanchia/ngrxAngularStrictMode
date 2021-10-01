import { Book } from '../model/books.model';

export interface OrdersState {
  Id: number,
  CustomerName: string
}
export interface AppState {

  books: Book[];
  collection?: string[];
  orders?: OrdersState[];
  SuccessMessage?:string;
  ErrorMessage:string;
}
