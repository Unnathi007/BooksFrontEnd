import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:any
  errMessage:any
  //=[
  //   {"id":1,"name":"Bootstrap","author":"abc","pages":12,"dop":Date.parse("1/21/2023")},
  //   {"id":2,"name":"NodeJS","author":"abc","pages":12,"dop":Date.parse("1/21/2023")},
  //   {"id":3,"name":"MongoDB","author":"abc","pages":12,"dop":Date.parse("1/21/2023")}
  // ]
  // @Output() bookEvent=new EventEmitter<Object>();
  constructor(private router:Router,private route:ActivatedRoute,private _bookService:BookService) { }

  ngOnInit(): void {
    this.books=this._bookService.getBooks().subscribe(data=>this.books=data,
      error=>this.errMessage=error);
      console.log(this.books)
  }
  onSelect(book:any){
    // this.bookEvent.emit(book);
    this.router.navigate(['book-detail',book.id]);
  }

}
