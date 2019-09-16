import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  single: any[];

  constructor() {
    Object.assign(this, {single})
   }

  ngOnInit() {
  }

}
