import { IProduct } from './Product.types'

export enum ETypePrice {
  plus = 'plus',
  minus = 'minus',
  delete = 'delete',
}

export enum EtypeProductAddOrDel {
  add = 'add',
  delete = 'delete',
}

export enum EtypeProductLS {
  add = 'add',
  delete = 'delete',
}

export enum EtypeProductCounter {
  plus = 'plus',
  minus = 'minus',
}

export interface ICartContext {
  cartData: IProduct[]
  totalCartPrice: number
  isTheCart: (productID: number) => IProduct | undefined
  setCartData: React.Dispatch<React.SetStateAction<IProduct[]>>
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>
  productCardGoToCart: (product: IProduct, counter: number) => void
  handlerProductInCart: (product: IProduct, actionProduct: EtypeProductAddOrDel) => void
  handlerCounterInCart: (product: IProduct, actionProductCounter: EtypeProductCounter) => void
}
