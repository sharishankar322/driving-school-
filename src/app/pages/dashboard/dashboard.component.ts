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
  signout()
  {
    this.fs.signout1()
  }
}
