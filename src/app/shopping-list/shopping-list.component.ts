import { Component, OnInit } from '@angular/core';
import { ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: ingridient[] = [
    new ingridient('apples', 10),
    new ingridient('tomatoes', 20)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
