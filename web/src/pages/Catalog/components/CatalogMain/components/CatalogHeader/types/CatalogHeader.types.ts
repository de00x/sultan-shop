import { IProduct } from '../../../../../../../types/Product.types'

interface ILocationItem {
  firstText: string
  secondText: string
}

interface ICatalogHeaderControllersProps {
  setSortFly: React.Dispatch<React.SetStateAction<boolean>>
  setSortFlyTitle: React.Dispatch<React.SetStateAction<string>>
  setCatalogAllProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export type { ILocationItem, ICatalogHeaderControllersProps }
