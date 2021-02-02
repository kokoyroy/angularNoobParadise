import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('photo','photo me fa asdsadsadsadsadasdssaasadaah  fisdofjosdfjodsfjojdfdsiifjsdefn dshodf oisgita apo to internet','https://libreshot.com/wp-content/uploads/2016/07/healthy-food.jpg'),
    new Recipe('photo','photo me fa asdsadsadsadsadasdssaasadaah  fisdofjosdfjodsfjojdfdsiifjsdefn dshodf oisgita apo to internet','https://libreshot.com/wp-content/uploads/2016/07/healthy-food.jpg'),
    new Recipe('photo','photo me fa asdsadsadsadsadasdssaasadaah  fisdofjosdfjodsfjojdfdsiifjsdefn dshodf oisgita apo to internet','https://libreshot.com/wp-content/uploads/2016/07/healthy-food.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
