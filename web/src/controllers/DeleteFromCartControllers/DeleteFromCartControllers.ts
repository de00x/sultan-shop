import { IProduct } from '../../types/Product.types'
import { EtypeProductAddOrDel } from '../../types/CartContext.types'
import { IDeleteFromCartControllProps } from '../../types/Controllers.types'

const DeleteFromCartControllers = (props: IDeleteFromCartControllProps) => {
  const deleteFromCart = (cartItem: IProduct) => {
    return () => {
      props.handlerProductInCart(cartItem, EtypeProductAddOrDel.delete)
    }
  }

  return { deleteFromCart }
}

export default DeleteFromCartControllers
