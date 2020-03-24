import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

/*Step-1 in Angular Routing: In app.module.ts we need to just import the RouterModule and define the Routes*/
const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'category/:id', component: BookListComponent},
  {path: '',redirectTo:'/books', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*Step-2 in Angular Routing: Tell Angular RouterModule to use Our Routes*/
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
