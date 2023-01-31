import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookUpdateComponent } from './book-update/book-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookInsertComponent } from './book-insert/book-insert.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BookListComponent,
    BookDetailComponent,
    BookUpdateComponent,
    BookInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
