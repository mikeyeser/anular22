import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Basket, changingtheamount, Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mycart',
  imports: [RouterModule, CommonModule, MycartComponent, FormsModule],
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

  

changingtheamount : changingtheamount[] =[]


  amount! : number




    changetheAmount1(id?: number, price? : number){
     
       this.api.changetheAmount({
        quantity: this.amount,
        price: price,
        productId: id
     }).subscribe((resp:any)=> {
         console.log(resp)
      // this.changingtheamount = resp
     })
     
    }

    vegeterian : boolean = false
    nuts : boolean = false
    spiciness : number = 0
    categoryId : number = 0



}
