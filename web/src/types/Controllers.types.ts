import { IProduct } from './Product.types'
import { EtypeProductAddOrDel, EtypeProductCounter } from './CartContext.types'

interface IMinusToCartControllProps {
  handlerCounterInCart: (product: IProduct, actionProductCounter: EtypeProductCounter) => void
}

interface IPlusToCartControllProps {
  handlerCounterInCart: (product: IProduct, actionProductCounter: EtypeProductCounter) => void
}

interface IDeleteFromCartControllProps {
  handlerProductInCart: (product: IProduct, actionProduct: EtypeProductAddOrDel) => void
}

export type { IPlusToCartControllProps, IMinusToCartControllProps, IDeleteFromCartControllProps }
