import { useContext } from 'react'
import { IProduct } from '../../types/Product.types'
import { CartContext } from '../../CartContext/CartContext'
import { EtypeProductAddOrDel, EtypeProductCounter } from '../../types/CartContext.types'

const AddToCartControllers = () => {
  const { isTheCart, handlerProductInCart, handlerCounterInCart } = useContext(CartContext)

  const addToCart = (product: IProduct) => {
    return () => {
      if (isTheCart(product.id) === undefined) {
        handlerProductInCart(product, EtypeProductAddOrDel.add)
      } else {
        handlerCounterInCart(product, EtypeProductCounter.plus)
      }
    }
  }
  return { addToCart, isTheCart, handlerProductInCart, handlerCounterInCart }
}

export default AddToCartControllers
