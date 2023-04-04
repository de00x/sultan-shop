import { IProduct } from '../../../../../types/Product.types'
import { ILocationItem } from '../components/CatalogHeader/types/CatalogHeader.types'

interface ISortByData {
  careOf: string
  inputFrom: string
  inputBefore: string
  byProducerData: string
}

interface ICatalogControllersProps {
  sortByData: ISortByData
  setSortByData: React.Dispatch<React.SetStateAction<ISortByData>>
  setCatalogAllProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

interface ICatalogContext {
  sortByData: ISortByData
  catalogAllProducts: IProduct[]
  clickCurrentItem: (location: ILocationItem) => void
  changeProductsByParameters: (products: IProduct[]) => void
  setSortByData: React.Dispatch<React.SetStateAction<ISortByData>>
  setCatalogAllProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export type { ICatalogContext, ISortByData, ICatalogControllersProps }
