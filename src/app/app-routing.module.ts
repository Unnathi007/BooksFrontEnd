import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [{path:'book-detail/:id',component:BookDetailComponent},
{path:'book-list',component:BookListComponent},
{path:'book-insert',component:BookInsertComponent},
{path:'book-update/:id',component:BookUpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BookDetailComponent,BookListComponent];