
export class Menu {
    id!: number
    name?: string
    price?: number
    nuts?: boolean
    image?: string
    vegeterian?: boolean
    spiciness?: number
    categoryId?: number
}
export class Basket{
    quantity!: number
    price!: number
    product?: Menu
}


export class Addingtocart{

  id!: number
  quantity!: number
  price!: number
  productId!: number
  product!: Menu
  
}
