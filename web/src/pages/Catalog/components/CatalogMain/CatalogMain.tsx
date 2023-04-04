import { CatalogHeader, CatalogHeaderMobile, CatalogItems, CatalogSortBy } from './components'
import { CatalogControllers, CatalogMainService } from './services'
import { IProduct } from '../../../../types/Product.types'
import { ISortByData } from './types/CatalogMain.types'
import styles from './styles/CatalogMain.module.scss'
import { CatalogContext } from './CatalogContext'
import { FC, useState } from 'react'

export const CatalogMain: FC = (): JSX.Element => {
  const [catalogAllProducts, setCatalogAllProducts] = useState<IProduct[]>([])
  const [sortByData, setSortByData] = useState<ISortByData>({
    inputFrom: '',
    inputBefore: '',
    byProducerData: '',
    careOf: '',
  })

  /// controllers ///

  const { changeProductsByParameters, clickCurrentItem } = CatalogControllers({
    sortByData,
    setSortByData,
    setCatalogAllProducts,
  })

  /// controllers ///

  /// useEffects ///

  CatalogMainService.GetAllProducts(setCatalogAllProducts)
  CatalogMainService.GetProductsByParameters(sortByData, changeProductsByParameters)

  /// useEffects ///

  return (
    <CatalogContext.Provider
      value={{
        sortByData,
        setSortByData,
        clickCurrentItem,
        catalogAllProducts,
        setCatalogAllProducts,
        changeProductsByParameters,
      }}
    >
      <div className={styles.wrapper}>
        <CatalogHeader />
        <CatalogHeaderMobile />
        <div className={styles.mainContainer}>
          <CatalogSortBy />
          <CatalogItems />
        </div>
      </div>
    </CatalogContext.Provider>
  )
}
