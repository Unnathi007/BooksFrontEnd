import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  _url='http://localhost:8000/api/delete-book'
  constructor(private _http:HttpClient) { }
  delete(bookId:any){
    console.log(bookId);
    return this._http.delete<any>(`${this._url}/${bookId}`);
  }

}
