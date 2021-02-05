import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('photo', 'photo me fa asdsadsadsadsadasdssaasadaah  fisdofjosdfjodsfjojdfdsiifjsdefn dshodf oisgita apo to internet', 'https://libreshot.com/wp-content/uploads/2016/07/healthy-food.jpg'),
    new Recipe('photo', 'photo me fa asdsadsadsadsadasdssaasadaah  fisdofjosdfjodsfjojdfdsiifjsdefn dshodf oisgita apo to internet', 'https://upload.wikimedia.org/wikipedia/en/2/2c/Greek_food.jpeg')
  ]
  @Output() recipeEmit = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeEmit.emit(recipe);
  }

}
