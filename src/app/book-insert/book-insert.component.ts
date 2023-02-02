import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, SelectControlValueAccessor} from '@angular/forms';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';
@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})
export class BookInsertComponent implements OnInit {
  get name(){
    return this.insertForm.get('name');
  }
  get author(){
    return this.insertForm.get('author');
  }
  get pages(){
    return this.insertForm.get('pages');
  }
  get publication_date(){
    return this.insertForm.get('publication_date');
  }
  set publication_date(value:any){
    this.insertForm.publication_date.get('publication_date').setValue(value.toLocaleString());
  }
  constructor(private fb:FormBuilder,private _insertService:InsertService,private router:Router) { }

  ngOnInit(): void {
    this.insertForm=this.fb.group({
      name:[''],
      author:[''],
      publication_date:[''],
      pages:['']
    });
  }
  insertForm:any
  onSubmit(){
    console.log(this.insertForm.value);
    this._insertService.insert(this.insertForm.value).subscribe(response=>console.log('Success!',response),
    error=>console.error('Error!',error))
    this.router.navigate(['book-list',]);
  }

}
