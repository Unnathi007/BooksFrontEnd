import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertService {
  _url='http://localhost:8000/api/new-book'
  constructor(private _http:HttpClient) { }
  insert(bookData:any){
    return this._http.post<any>(this._url,bookData);
  }
}
