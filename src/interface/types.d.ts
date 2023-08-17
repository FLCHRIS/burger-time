export interface IProduct {
  id: number
  name: string
  image: string
  price: number
  information: string
}

export interface IProductCart extends IProduct {
  id: number
  name: string
  image: string
  price: number
  information: string
  quantity: number
}

export interface ICart {
  total: number
  subtotal: number
  products: IProductCart[]
}

export interface IUserContext {
  cart: ICart
  addCart: (product: IProductCart) => void
}

export type UserContextType = IUserContext | null
