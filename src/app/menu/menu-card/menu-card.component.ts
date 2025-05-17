import { Component, Input, input } from '@angular/core';
import { Addingtocart, Menu } from '../../models/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-card',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {
   
 constructor(private api : MenuService){}

 addingtoCart : Addingtocart[] =[]

   @Input() singleProduct? : Menu

   amount! : number

   ngOnInit(){
    
  }



    addingthecart(){
       this.api.addtoBasket({
       quantity: this.amount,
        price: this.singleProduct?.price,
        productId: this.singleProduct?.id
     }).subscribe((resp:any)=> {
      console.log(resp)
      this.addingtoCart = resp
     })
    }


}




