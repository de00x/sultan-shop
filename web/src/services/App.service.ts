import { useEffect } from 'react'
import { IProduct } from '../types/Product.types'

const AppService = {
  GetCartDataByLS(setCartData: React.Dispatch<React.SetStateAction<IProduct[]>>) {
    useEffect(() => {
      const cartDataByLS = localStorage.getItem('cart')

      if (cartDataByLS !== null) setCartData(JSON.parse(cartDataByLS))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },

  SetCartDataByLS(totalCartPrice: number) {
    useEffect(() => {
      localStorage.setItem('totalCartPrice', String(totalCartPrice))
    }, [totalCartPrice])
  },
}

export default AppService
