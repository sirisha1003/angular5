import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = 's';
  btnText : string = "submit";
  password : string = 'siri';
  count : number;
  goals = [];
  items = [];

  constructor(private router : ActivatedRoute, private ro : Router, private _data : DataService) {
     this.router.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this.name = 'sdf';
    this.count = this.goals.length;
    this._data.item.subscribe(res=> this.items = res); 
    this._data.changeItem(this.items);
  }
  
  submit(){
     this.goals.push(this.btnText);
     this.count = this.goals.length;
     this.items.push(this.name);
     console.log(this.name);
     this._data.changeItem(this.items);
     this.ro.navigate(['about/4']);
  }

  remove(i){
    this.items.splice(i,1,'sd');
    this._data.changeItem(this.items);
  }
}
