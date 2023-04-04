import { IProduct } from '../../../../../types/Product.types'

interface IProductCardMainProps {
  productCardData: IProduct[]
}

interface IProductCardMainControllProps {
  productCardCounter: number
  setProductCardCounter: React.Dispatch<React.SetStateAction<number>>
}

export type { IProductCardMainProps, IProductCardMainControllProps }
