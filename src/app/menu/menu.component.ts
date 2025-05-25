import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MenuCardComponent, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private api : MenuService){}

menu : Menu[] = []



ngOnInit(){
this.api.getAll().subscribe((resp:any)=> {
 // console.log(resp)
 this.menu = resp
})
}


    vegeterian : boolean = false
    nuts : boolean = false
    spiciness : string = ""
    categoryId : string = ""



    filterwithdavid(){
         this.api.filterProducts(this.vegeterian, this.nuts, this.spiciness, this.categoryId).subscribe((resp: any) =>  this.menu = resp)
    }

    clear(){
      this.api.getAll().subscribe((resp:any) => {
        this.menu = resp
      })
    }

}
