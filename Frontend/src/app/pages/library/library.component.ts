import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {


  constructor (private route:Router,private apiservice: BackendService){}

  modelBook:any = []


  ngOnInit(): void {
    this.getBook()
  }


  getBook(){
    this.apiservice.getBook().subscribe(res=>{
      this.modelBook = res;
    })

  }

  // delete book
  deleteBook(id:any){
    this.apiservice.deleteBook(id).subscribe(res=>{
      this.modelBook = res
      console.log(this.modelBook);
      
    })

    this.ngOnInit()

  }

}
