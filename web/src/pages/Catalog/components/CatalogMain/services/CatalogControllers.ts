import { IProduct } from '../../../../../types/Product.types'
import { ICatalogControllersProps } from '../types/CatalogMain.types'
import { ILocationItem } from '../components/CatalogHeader/types/CatalogHeader.types'

const CatalogControllers = (props: ICatalogControllersProps) => {
  const changeProductsByParameters = (products: IProduct[]) => {
    props.setCatalogAllProducts(products)
  }

  const clickCurrentItem = (location: ILocationItem) => {
    props.setSortByData({
      ...props.sortByData,
      careOf: `${location.firstText} ${location.secondText}`,
    })
  }

  return { changeProductsByParameters, clickCurrentItem }
}

export default CatalogControllers
