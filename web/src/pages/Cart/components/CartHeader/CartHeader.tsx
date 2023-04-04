import styles from './styles/CartHeader.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const CartHeader: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationContainer}>
        <Link to={'/main'}>
          <div>Главная</div>
        </Link>
        <div>Корзина</div>
      </div>
      <div className={styles.title}>КОРЗИНА</div>
    </div>
  )
}
