import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  books(){
    this.router.navigate(['/book-list']);
  }
}
