import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  _url='http://localhost:8000/api/update-book'
  constructor(private _http:HttpClient) { }
  update(bookData:any,bookId:any){
    console.log(bookData,bookId);
    return this._http.put<any>(`${this._url}/${bookId}`, bookData);
  }
}
