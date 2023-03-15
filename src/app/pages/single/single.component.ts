import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';



@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  constructor(private hero:HeroService) {}

  data=this.hero.giveData()
    single:any
  

  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e=>e.id===id)
    console.log("title",this.single)
  }

}
