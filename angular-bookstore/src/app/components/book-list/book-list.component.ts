import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;
/* Step -6 in Angular Routing: Modify the booklist component to Accect the route Parameter
   Sub tasks: Injected the activatedRoute class to the constructor*/ 
  constructor(private _bookService: BookService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(
      ()=>{
        this.listBooks();
      }
    )
  }
  listBooks(){
    debugger
    /*  snapshot is one of the approach to accept the url parameter
        Parammap will be the observable, that contain a map of the required and optional
        parameters specific to the route
        get method will return the string so + will be convert the string to integer*/
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    }else{
      this.currentCategoryId = 1;
    }

    this._bookService.getBooks(this.currentCategoryId).subscribe(
      data => {this.books = data
      console.log(data)}
      )
  }
}
