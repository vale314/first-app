import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    @Output() Selected = new EventEmitter<string>();
    private menuItemsArray: any[] = [ 
        {"title":"Electricity","link":"#"},
        {"title":"Mobile Bill","link":"#"},
        {"title":"Home and Kitchen","link":"#",
        "subItems":[
                    {"title":"Furniture","link":"#"},
                    {"title":"Cookware","link":"#"},
                   ]
        },
        {"title":"Car and Bike Accessories","link":"#",
         "subItems":[
                      {"title":"Tyres and Alloys","link":"#"},
                      {"title":"Comfort and Safety","link":"#"},
                     ]
        },
  ];

    public onMenuClose(){
        console.log("menu closed");
      }
    public onMenuOpen(){
        console.log("menu Opened");
    }
    private onItemSelect(item:any){
        console.log(item);
    }

    onSelect(route:string){
        console.log(route)
        this.Selected.emit(route)
    }
}