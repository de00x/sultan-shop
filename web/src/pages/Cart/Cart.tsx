import { Footer, Header } from '../../components'
import { FC } from 'react'
import styles from './styles/Cart.module.scss'
import { CartFooter, CartHeader, CartItems } from './components'

export const Cart: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </div>
      <Footer />
    </div>
  )
}
