import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
import{AngularFireAuth}from '@angular/fire/compat/auth'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private fs:FireService,public afa:AngularFireAuth){}
  // signout()
  // {
  //   this.fs.signout1()
  // }

 
  sid: any = '';
  sname: any = '';
  cat: any = '';
  tid: any = '';
  tname: any = '';
  
  

  slot() {
    this.validation1()
    const details = {
      sid1: this.sid,
      sname1: this.sname,
      cat1: this.cat,
      tid1: this.tid,
      tname1: this.tname
    };
   
    this.fs.slot1(details);
    this.sid=''
    this.sname=''
    this.cat=''
    this.tid=''
    this.tname=''
  }
  validation1()
  {
    if(this.sid==='')
    {
      alert('Please enter username')
    }
    else if(this.sname==='')
    {
      alert('Please enter password')
    }
    else if(this.cat==='')
    {
      alert('Please enter cyour concern')
    }
    else if(this.tid==='')
    {
      alert('Please enter cyour concern')
    }
    else if(this.tname==='')
    {
      alert('Please enter cyour concern')
    }
  }
}
