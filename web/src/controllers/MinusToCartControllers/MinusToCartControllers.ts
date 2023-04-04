import { IProduct } from '../../types/Product.types'
import { EtypeProductCounter } from '../../types/CartContext.types'
import { IMinusToCartControllProps } from '../../types/Controllers.types'

const MinusToCartControllers = (props: IMinusToCartControllProps) => {
  const minusToCart = (cartItem: IProduct) => {
    return () => {
      if (cartItem.counterInCart !== 1) {
        props.handlerCounterInCart(cartItem, EtypeProductCounter.minus)
      }
    }
  }

  return { minusToCart }
}

export default MinusToCartControllers
