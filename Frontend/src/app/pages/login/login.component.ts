import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {FormBuilder } from '@angular/forms'
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  User:any

  constructor(private router:Router, private fb:FormBuilder, private api:BackendService){
  
  this.User = this.fb.group({
    email:[''],
    password:['']
  })
  }

  



  login(){
    let value = this.User.value
    console.log(value);
    // console.log(`${this.User.email}, ${this.User.password}`)
    // this.router.navigate(['/library'])

    this.api.login(value).subscribe((res:any)=>{
      console.log(res);
      
      if(res.status === 200){
        if(res.token){
          localStorage.setItem('token',res.token)
          this.router.navigate(['/library'])
          
        }
        
      }
      else{
      alert('not access')

      }      
    })
  }


  


}
