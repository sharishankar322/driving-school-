import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  email1:any=''
  pass1:any=''
  email:any=''
  pass:any=''
  user:any=''
  
  constructor(private fs:FireService) {
  }
  //signup method
  register() {


    this.validation()
    let userDetails={
      email:this.email,
      password:this.pass,
      username:this.user
    }
    this.fs.registration(userDetails)
    this.email=''
    this.pass=''
    this.user=''
    
  }

  validation()
  {
    if(this.user==='')
    {
      alert('Please enter username')
    }
    else if(this.email==='')
    {
      alert('Please enter password')
    }
    else if(this.pass==='')
    {
      alert('Please enter confirm password')
    }
    
  }
  login()
  {
    if(this.email1==='')
    {
      alert('Please enter email')
    }
    else if(this.pass1==='')
    {
      alert('Please enter password')
    }
    let userDetails={
      email:this.email1,
      password:this.pass1,

  }
  this.fs.loginfn(userDetails)
  this.email1=''
  this.pass1=''
}



}
