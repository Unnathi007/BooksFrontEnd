import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  books=[
    {"id":1,"name":"Bootstrap","author":"abc","pages":12,"dop":Date.parse("1/21/2023")},
    {"id":2,"name":"NodeJS","author":"abc","pages":12,"dop":Date.parse("1/21/2023")},
    {"id":3,"name":"MongoDB","author":"abc","pages":12,"dop":Date.parse("1/21/2023")}
  ]
  book:any;
  constructor(private router:Router,private route:ActivatedRoute) { }
  // @Input() book:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id1=Number(params.get('id'));
      this.book=this.books.filter((book)=>{if(book.id==id1){return book}else {return null;}})[0];
    })
  }

}
