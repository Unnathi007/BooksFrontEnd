import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  get name(){
    return this.updateForm.get('name');
  }
  get author(){
    return this.updateForm.get('author');
  }
  get pages(){
    return this.updateForm.get('pages');
  }
  get publication_date(){
    return this.updateForm.get('publication_date');
  }
  set name(value:any){
      this.updateForm.name.get('name').setValue(value);
  }
  set author(value:any){
    this.updateForm.author.get('author').setValue(value);
  }
  set pages(value:any){
    this.updateForm.pages.get('pages').setValue(value);
  }
  set publication_date(value:any){
    this.updateForm.publication_date.get('publication_date').setValue(value);
  }
  book:any;
  updateForm:any;
  date:any
  constructor(public dataService:DataService,private route:ActivatedRoute,private router:Router,private fb:FormBuilder,private _updateService:UpdateService) {
    
   }
  ngOnInit(): void {
    this.book=this.dataService.serviceData;
    console.log(this.book.value);
    this.date=formatDate(this.book['publication_date'],'yyyy-MM-dd' , 'en-IN')
    this.updateForm=this.fb.group({
      id:[this.book.id],
      name:[this.book.name],
      author:[this.book.author],
      publication_date:[this.date],//Date.parse(this.book.publication_date)],
      pages:[this.book.pages]
      
    });
    
    //this.updateForm.get('publication_date').patchValue([this.date.getFullYear(),this.date.getMonth(), this.date.getDate()].join('-'));
    //'MM/dd/yyyy'
    console.log(formatDate(this.book['publication_date'], 'yyyy-MM-dd', 'en-IN'),this.book['publication_date'])
  }
  // insertForm=this.fb.group({
  //   name:[],
  //   author:[''],
  //   dop:[''],
  //   pages:['']
  // });
  
  onSubmit(){
    
    let bookId=this.updateForm.value.id;
    console.log(this.updateForm.value,bookId);
    this._updateService.update(this.updateForm.value, bookId ).subscribe(response=>console.log('Success!',response),

    error=>console.error('Error!',error))
  }
}
