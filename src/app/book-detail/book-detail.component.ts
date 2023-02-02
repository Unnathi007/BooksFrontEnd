import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from '../data.service';
import { DeleteService } from '../delete.service';
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
  constructor(private _deleteService:DeleteService,public dataService:DataService,private router:Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.book=this.dataService.serviceData;
  }
  
  updateBook(book:any){
    this.router.navigate(['book-update',book.id],book);
  }
  deleteBook(id:any){
    this._deleteService.delete(id).subscribe(response=>console.log('Success!',response),
    error=>console.error('Error!',error))
    this.router.navigate(['book-list',]);
  }
}
