import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  token = localStorage.getItem('token')

  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:3000/api"



  login(data:any){
    return this.http.post(`http://localhost:3000/auth`, data)
  }

  // get book from backend
  getBook(){
    return this.http.get(`${this.apiUrl}/library`)
  }

  deleteBook(id:any){
    return this.http.delete(`${this.apiUrl}/library/${id}`)

  }






}
