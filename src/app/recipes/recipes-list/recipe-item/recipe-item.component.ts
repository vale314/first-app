import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() card:Recipe

  ngOnInit() {
  }

}
