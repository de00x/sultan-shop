import { ReactComponent as DownloadBtn } from './img/btnDownload.svg'
import { IProductCardMainProps } from './types/ProductCardMain.types'
import { ReactComponent as ItemSizeOne } from './img/itemSize1.svg'
import { ReactComponent as ItemSizeTwo } from './img/itemSize2.svg'
import { IProduct } from '../../../../types/Product.types'
import styles from './styles/ProductCardMain.module.scss'
import { ReactComponent as Share } from './img/share.svg'
import { ProductCardMainControllers } from './services'
import { ReactComponent as Cart } from './img/cart.svg'
import { CartContext } from '../../../../CartContext'
import { FC, useContext, useState } from 'react'

export const ProductCardMain: FC<IProductCardMainProps> = (props): JSX.Element => {
  const [characteristicsOpen, setCharacteristicsOpen] = useState(false)
  const { isTheCart, productCardGoToCart } = useContext(CartContext)
  const [productCardCounter, setProductCardCounter] = useState(1)
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  /// controllers ///

  const { plusProductCounter, minusProductCounter } = ProductCardMainControllers({
    productCardCounter,
    setProductCardCounter,
  })

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      {props.productCardData.map((product: IProduct) => (
        <div className={styles.productCardMainWrapper} key={product.id}>
          <div className={styles.leftBlockContainer}>
            <img src={product.urlImg} alt={product.brand} />
          </div>
          <div className={styles.rightBlockContainer}>
            {product.inStock ? (
              <div className={styles.inStock}>В наличии</div>
            ) : (
              <div className={styles.outOfStock}>Нет в наличии</div>
            )}
            <div className={styles.productName}>
              <span>{product.brand}</span> {product.name}
            </div>
            <div className={styles.productSizeType}>
              {product.sizeType === 'г' ? <ItemSizeTwo /> : <ItemSizeOne />}
              {product.size} {product.sizeType}
            </div>
            <div className={styles.price__basket__Container}>
              <div className={styles.price}>{product.price} ₽</div>
              <div className={styles.basketCounter}>
                <button
                  onClick={minusProductCounter}
                  className={productCardCounter === 1 ? styles.btnDisabled : ''}
                >
                  -
                </button>
                <span>{productCardCounter}</span>
                <button onClick={plusProductCounter}>+</button>
              </div>
              <button
                className={styles.productBtnInCart}
                onClick={() => productCardGoToCart(product, productCardCounter)}
              >
                В корзину
                <Cart />
                {isTheCart(product.id) !== undefined && (
                  <span className={styles.currentCartCounter}>
                    {isTheCart(product.id)?.counterInCart}
                  </span>
                )}
              </button>
            </div>
            <div className={styles.adBlockContainer}>
              <div className={styles.productShare}>
                <Share />
              </div>
              <div className={styles.freeDelivery}>
                <div>
                  При покупке от <span>10 000 ₽ </span>бесплатная
                </div>
                доставка по Кокчетаву и области
              </div>
              <div className={styles.priceList}>
                Прайс-лист <DownloadBtn />
              </div>
            </div>
            <div className={styles.productProducer}>
              Производитель: <span>{product.producer}</span>
            </div>
            <div className={styles.productBrand}>
              Бренд: <span>{product.brand}</span>
            </div>
            <div className={styles.productArticle}>
              Артикул: <span>{product.article}</span>
            </div>
            {product.quantityBox !== undefined && (
              <div className={styles.productQuantity}>
                Кол-во в коробке: <span>{product.quantityBox}</span>
              </div>
            )}
            <div className={styles.productBarcode}>
              Штрихкод: <span>{product.barcode}</span>
            </div>
            {product.boxSize !== undefined && (
              <div className={styles.productSize}>
                Размеры коробки(д*ш*в): <span>{product.boxSize}</span>
              </div>
            )}
            {product.boxWeight !== undefined && (
              <div className={styles.productWeight}>
                Вес коробки: <span>{product.boxWeight}</span>
              </div>
            )}
            <div className={styles.descriptionContainer}>
              <div className={styles.descriptionBtn}>
                Описание
                <span onClick={() => setDescriptionOpen(!descriptionOpen)}>
                  {!descriptionOpen ? '▼' : '▲'}
                </span>
              </div>
              {descriptionOpen && (
                <div className={styles.descriptionText}>{product.description}</div>
              )}
              <div className={styles.descriptionBottomLine}></div>
            </div>
            <div className={styles.characteristicsContainer}>
              <div className={styles.characteristicsBtn}>
                Характеристики
                <span onClick={() => setCharacteristicsOpen(!characteristicsOpen)}>
                  {!characteristicsOpen ? '▼' : '▲'}
                </span>
              </div>
              {characteristicsOpen && (
                <>
                  <div className={styles.charPurpose}>
                    Назначение: <span>{product.characteristics.purpose}</span>
                  </div>
                  <div className={styles.charType}>
                    Тип: <span>{product.characteristics.type}</span>
                  </div>
                  <div className={styles.charProducer}>
                    Производитель: <span>{product.producer}</span>
                  </div>
                  <div className={styles.charBrand}>
                    Бренд: <span>{product.brand}</span>
                  </div>
                  <div className={styles.charArticle}>
                    Артикул: <span>{product.article}</span>
                  </div>
                  <div className={styles.charBarcode}>
                    Штрихкод: <span>{product.barcode}</span>
                  </div>
                  {product.quantityBox !== undefined && (
                    <>
                      <div className={styles.charWeight}>
                        Вес: <span>{product.boxWeight}</span>
                      </div>
                      <div className={styles.charVolume}>
                        Объем: <span>{product.boxWeight}</span>
                      </div>
                      <div className={styles.charQuantityBox}>
                        Кол-во в коробке: <span>{product.quantityBox}</span>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
