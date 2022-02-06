import { Component, OnInit } from '@angular/core';
console.log("Hello1");

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  x?:string;

  ngOnInit(): void {
  }

  onGenerate(  x1?:string){
console.log(x1);

  }
}
