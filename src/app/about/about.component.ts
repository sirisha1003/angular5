import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  items: any;

  constructor(private rout : ActivatedRoute, private _data : DataService) {
    this.rout.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
     this._data.item.subscribe(res => this.items = res);

  }

}
