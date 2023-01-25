import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IBook} from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _url:string="http://localhost:8000/api/";
  
  constructor(private http:HttpClient) { }
  getBooks():Observable<IBook[]> {
    console.log(this.http.get<IBook[]>(this._url+"books").pipe(catchError(this.errorHandler)))
    return this.http.get<IBook[]>(this._url+"books").pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    let errMessage="";
    if (error.status === 0) {
       console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
        errMessage = `Backend returned code ${error.status}, body was: `, error.error;
    }
    errMessage+='Something bad happened; please try again later.';
    return throwError(() => new Error(errMessage));
  }
}
