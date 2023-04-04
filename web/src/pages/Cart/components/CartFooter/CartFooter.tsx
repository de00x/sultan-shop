import { CartFooterControllers } from './controllers'
import { CartContext } from '../../../../CartContext'
import styles from './styles/CartFooter.module.scss'
import { FC, useContext, useState } from 'react'
import { emptyCart } from './img'

export const CartFooter: FC = (): JSX.Element => {
  const { totalCartPrice, setCartData, setTotalCartPrice, cartData } = useContext(CartContext)
  const [tyForTheOrder, setTyForTheOrder] = useState(false)

  /// controllers ///

  const { placeAnOrder } = CartFooterControllers({
    setCartData,
    setTyForTheOrder,
    setTotalCartPrice,
  })

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      {cartData.length === 0 ? (
        <div className={styles.cartIsEmptyContainer}>
          <div className={styles.emptyCartImg}>
            <img src={emptyCart} alt="emptyCart" />
          </div>
          <div className={styles.emptyCartTitle}>
            Ваша корзина пуста, отправляйтесь за покупками!
          </div>
        </div>
      ) : (
        <>
          <div className={styles.placeAnOrderContainer}>
            <button className={styles.placeAnOrderBtn} onClick={placeAnOrder}>
              Оформить заказ
            </button>
            <div className={styles.totalPrice}>{totalCartPrice} ₽</div>
          </div>
          {tyForTheOrder && <div className={styles.tyForTheOrder}>Спасибо за заказ!</div>}
        </>
      )}
    </div>
  )
}
