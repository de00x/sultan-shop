import { ICartFooterControllProps } from '../types/CartFooter.types'

const CartFooterControllers = (props: ICartFooterControllProps) => {
  const placeAnOrder = () => {
    props.setTyForTheOrder(true)
    setTimeout(() => {
      props.setTyForTheOrder(false)
      props.setCartData([])
      localStorage.removeItem('cart')
      localStorage.removeItem('totalCartPrice')
      props.setTotalCartPrice(0)
    }, 3000)
  }

  return { placeAnOrder }
}

export default CartFooterControllers
