import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Basket, Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-mycart',
  imports: [RouterModule, CommonModule, MycartComponent,],
  templateUrl: './mycart.component.html',
  styleUrl: './mycart.component.scss'
})
export class MycartComponent {
constructor(private api : MenuService){}

basket : Basket[] = []
 

 ngOnInit(){
     this.api.getallBasket().subscribe((resp:any)=> {
      // console.log(resp)
      this.basket = resp
     })
  }

  delete(id?: number){
    this.api.deleteFromCart(id).subscribe(resp => console.log(resp))

  }

}
