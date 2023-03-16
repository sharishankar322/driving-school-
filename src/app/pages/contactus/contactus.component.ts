import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  name: any = '';
  email: any = '';
  msg: any = '';

  constructor(private fs: FireService) {}

  contactus() {
    this.validation()
    const details = {
      name1: this.name,
      email1: this.email,
      msg1: this.msg
    };
   
    this.fs.contactus1(details);
    this.name=''
    this.email=''
    this.msg=''
  }
  validation()
  {
    if(this.name==='')
    {
      alert('Please enter username')
    }
    else if(this.email==='')
    {
      alert('Please enter password')
    }
    else if(this.msg==='')
    {
      alert('Please enter cyour concern')
    }
  
  }

}
