import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from './recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Parlee ','Morgan', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.', 'http://cdn.shopify.com/s/files/1/0952/0786/t/2/assets/hero_slide_4_1024x1024.jpg?11665332104045802732https://ae01.alicdn.com/kf/HTB1Ix6gJVXXXXb6XVXXq6xXFXXXC/2015-New-Women-Design-Black-Tops-Sexy-Marilyn-Monroe-Print-Summer-Punk-Printing-Simple-T-shirt.jpg'),
    new Recipe('Thermopolis ','Vila', 'Aenean vel nullam, morbi tincidunt neque aenean magna dictumst ante, magna amet ridiculus mauris massa, a at. Nullam eget cras ' , 'https://guesseu.scene7.com/is/image/GuessEU/W74I37K7L90-A000?wid=1024&hei=768&fmt=jpeg&qlt=70&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0'),
    new Recipe('Delevingne ','Lodi','Mauris facilisis, rutrum ac ante in, vestibulum morbi eros rhoncus velit. Vivamus dignissim labore id, ultricies eu est duis nulla', 'https://c.wallhere.com/photos/40/30/Cara_Delevingne_women_model-222358.jpg!d'),
    new Recipe('Thrifter','Only', 'Sem pellentesque a elit, nobis phasellus, purus pellentesque dapibus, gravida rhoncus. Diam sit maecenas aliquet, laoreet parturient ', 'https://static1.squarespace.com/static/57eda7a7b8a79be6cfbc559b/57eeeecb197aeaadfd19acfb/5833b312414fb52407e474ba/1479784051833/kindnessisnonpartisan.jpg?format=1500w'),
    new Recipe('Logo Print','Myla','Adipiscing et vestibulum et ullamcorper lorem mauris, volutpat sit ut consequatur, porta sit, duis sem placerat elit quis nibh', 'https://guesseu.scene7.com/is/image/GuessEU/O74I09VI006-P053?wid=1024&hei=768&fmt=jpeg&qlt=70&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0'),
    new Recipe('Punk','Riverside','Ac non pede placerat maecenas, magna sed curabitur, nunc sed laoreet venenatis nunc platea, lorem lobortis sapien sunt facilisi ', 'http://www.ceveomusic.com/wp-content/uploads/2016/07/Ceveo_Wolpertinger2016_female-1024x768.jpg'),
    new Recipe('Stash ','Uve',' Donec ante magna nam id. Proin quam, mollis ut velit, amet in, velit est nunc non mauris consectetuer, in at platea scelerisque ', 'https://imgix.ttcdn.co/i/product/original/0/430373-accc543fc3c34b6c92c0b62adb6026c8.png?q=100&auto=format%2Ccompress&w=2000&fm=jpeg')
  ]

  

  constructor() { }

  ngOnInit() {
  }

}
