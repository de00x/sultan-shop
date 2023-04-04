import { IProduct } from '../../../../../types/Product.types'

export interface ICartFooterControllProps {
  setCartData: React.Dispatch<React.SetStateAction<IProduct[]>>
  setTyForTheOrder: React.Dispatch<React.SetStateAction<boolean>>
  setTotalCartPrice: React.Dispatch<React.SetStateAction<number>>
}
