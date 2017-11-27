import {Component} from '@angular/core'

@Component({
    selector:'app-background',
    templateUrl:'./background.component.html',
    styleUrls:['./background.component.css']
})

export class BackgroundComponent{
    
     public name:string=''

    constructor(){
        this.writting()
    }

    writting(){
        const mexico = 'PlaceBuy'
        var cambio = mexico.split('')
        var index = 0
        const intervalTitle = setInterval(()=>{ 

            if(cambio[index] !== undefined){
                this.name=  this.name.concat(cambio[index])
                
            }                

            
            index++
        }, 700)
    }
}