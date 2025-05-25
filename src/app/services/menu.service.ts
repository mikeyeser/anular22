import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getallBasket(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  addtoBasket(postObject: any){
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", postObject )
  }

  deleteFromCart(id? :number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  changetheAmount(uptobject: any){
    return this.http.put(`https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket`, uptobject)
  }

  filterProducts( vegeterian : boolean, nuts: boolean, spiciness: string,categoryId: string){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${spiciness}&categoryId=${categoryId}`)
  }
}                      
