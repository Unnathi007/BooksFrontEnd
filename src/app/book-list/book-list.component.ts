import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { BookService } from '../book.service';
import { DataService } from '../data.service';
// import { DataService } from './data.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:any
  errMessage:any
  constructor(public dataService: DataService,private router:Router,private route:ActivatedRoute,private _bookService:BookService) { }

  ngOnInit(): void {
    this.books=this._bookService.getBooks().subscribe(data=>this.books=data,
      error=>this.errMessage=error);
      console.log(this.books)
  }
  onSelect(book:any){
    this.router.navigate(['book-detail',book.id]);
    this.dataService.serviceData=book;
  }

}
