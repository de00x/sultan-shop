import { ProductCardNavigation, ProductCardMain } from './components'
import styles from './styles/ProductCard.module.scss'
import { IProduct } from '../../types/Product.types'
import { Footer, Header } from '../../components'
import { ProductCardService } from './services'
import { FC, useState } from 'react'

export const ProductCard: FC = (): JSX.Element => {
  const [productCardData, setProductCardData] = useState<IProduct[]>([])
  const [currentProductName, setCurrentProductName] = useState('')

  /// useEffects ///

  ProductCardService.GetProductCard(setProductCardData, setCurrentProductName)

  /// useEffects ///

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContainer}>
        <ProductCardNavigation currentProductName={currentProductName} />
        <ProductCardMain productCardData={productCardData} />
      </div>
      <Footer />
    </div>
  )
}
