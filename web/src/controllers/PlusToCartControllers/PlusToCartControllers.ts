import { IProduct } from '../../types/Product.types'
import { EtypeProductCounter } from '../../types/CartContext.types'
import { IPlusToCartControllProps } from '../../types/Controllers.types'

const PlusToCartControllers = (props: IPlusToCartControllProps) => {
  const plusToCart = (cartItem: IProduct) => {
    return () => {
      props.handlerCounterInCart(cartItem, EtypeProductCounter.plus)
    }
  }
  return { plusToCart }
}

export default PlusToCartControllers
