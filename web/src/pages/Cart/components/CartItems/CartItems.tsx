import { ReactComponent as ItemSizeOne } from './img/itemSize1.svg'
import { ReactComponent as ItemSizeTwo } from './img/itemSize2.svg'
import { CartContext } from '../../../../CartContext/CartContext'
import { ReactComponent as ItemTrash } from './img/trash.svg'
import styles from './styles/CartItems.module.scss'
import { FC, useContext } from 'react'
import {
  PlusToCartControllers,
  MinusToCartControllers,
  DeleteFromCartControllers,
} from '../../../../controllers'

export const CartItems: FC = (): JSX.Element => {
  const { cartData, handlerProductInCart, handlerCounterInCart } = useContext(CartContext)

  /// controllers ///

  const { plusToCart } = PlusToCartControllers({ handlerCounterInCart })

  const { minusToCart } = MinusToCartControllers({ handlerCounterInCart })

  const { deleteFromCart } = DeleteFromCartControllers({ handlerProductInCart })

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      {cartData.map((cartItem) => (
        <div className={styles.itemContainer} key={cartItem.id}>
          <div className={styles.imgContainer}>
            <img src={cartItem.urlImg} alt="itemImg" />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.itemSize}>
              {cartItem.sizeType === 'г' ? <ItemSizeTwo /> : <ItemSizeOne />}
              {cartItem.size} {cartItem.sizeType}
            </div>
            <div className={styles.itemName}>{cartItem.name}</div>
            <div className={styles.itemDescription}>{cartItem.description}</div>
          </div>
          <div className={styles.itemCounterContainer}>
            <div className={styles.itemCounter}>
              <button
                onClick={minusToCart(cartItem)}
                className={cartItem.counterInCart === 1 ? styles.btnDisabled : ''}
              >
                -
              </button>
              <div>{cartItem.counterInCart}</div>
              <button onClick={plusToCart(cartItem)}>+</button>
            </div>
          </div>
          <div className={styles.itemPriceContainer}>
            <div className={styles.itemPrice}>
              {parseFloat(cartItem.price) * cartItem.counterInCart}
            </div>
          </div>
          <div className={styles.itemTrashContainer}>
            <button className={styles.itemTrashBtn} onClick={deleteFromCart(cartItem)}>
              <ItemTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
