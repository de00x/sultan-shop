import { AddToCartControllers } from '../../../../../../controllers'
import { ReactComponent as ItemSizeOne } from './img/itemSize1.svg'
import { ReactComponent as ItemSizeTwo } from './img/itemSize2.svg'
import { IProduct } from '../../../../../../types/Product.types'
import { ReactComponent as ItemInCart } from './img/cart.svg'
import { CatalogPagination, LoadingPage } from './components'
import styles from './styles/CatalogItems.module.scss'
import { CatalogContext } from '../../CatalogContext'
import { Link } from 'react-router-dom'
import { FC, useContext } from 'react'

export const CatalogItems: FC = (): JSX.Element => {
  const { catalogAllProducts } = useContext(CatalogContext)

  /// controllers ///

  const { addToCart, isTheCart } = AddToCartControllers()

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      {catalogAllProducts.length === 0 ? (
        <LoadingPage />
      ) : (
        <>
          <div className={styles.productsContainer}>
            {catalogAllProducts.map((product: IProduct) => (
              <div className={styles.product} key={product.id}>
                <div className={styles.productImg}>
                  <img src={product.urlImg} alt={product.brand} />
                </div>
                <div className={styles.productSize}>
                  {product.sizeType === 'г' ? <ItemSizeTwo /> : <ItemSizeOne />}
                  {product.size} {product.sizeType}
                </div>
                <Link to={`/product-card/${product.id}`}>
                  <div className={styles.productName}>
                    <span>{product.brand}</span> {product.name}
                  </div>
                </Link>
                <div className={styles.productBarcode}>
                  <span>Штрихкод:</span> {product.barcode}
                </div>
                <div className={styles.productProducer}>
                  <span>Производитель:</span> {product.producer}
                </div>
                <div className={styles.productBrand}>
                  <span>Бренд:</span> {product.brand}
                </div>
                <div className={styles.productFooter}>
                  <div className={styles.productPrice}>{product.price} ₽</div>
                  <button className={styles.productBtnInCart} onClick={addToCart(product)}>
                    в корзину <ItemInCart />
                    {isTheCart(product.id) !== undefined && (
                      <span className={styles.currentCartCounter}>
                        {isTheCart(product.id)?.counterInCart}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <CatalogPagination />
        </>
      )}
    </div>
  )
}
