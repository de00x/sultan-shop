import { CartContext } from '../../../../../CartContext'
import { useContext, useRef } from 'react'

const BottomHeaderControllers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchRef: any = useRef(null)
  const searchSvgClick = () => {
    if (searchRef.current !== null) searchRef.current.focus()
  }
  const { totalCartPrice, cartData } = useContext(CartContext)

  return { searchSvgClick, totalCartPrice, cartData, searchRef }
}

export default BottomHeaderControllers
