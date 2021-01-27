import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
display :string = "kalimera"
// color :string = "red"



  constructor() { }

  ngOnInit(): void {
  }

}
