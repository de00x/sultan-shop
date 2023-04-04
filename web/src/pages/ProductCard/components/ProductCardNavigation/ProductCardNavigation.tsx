import { IProdCardNaviProps } from './types/ProdCardNavi.types'
import styles from './styles/ProdCardNav.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const ProductCardNavigation: FC<IProdCardNaviProps> = (props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navItemsContainer}>
        <Link to={'/main'}>
          <div>Главная</div>
        </Link>
        <Link to={'/catalog'}>
          <div>Каталог</div>
        </Link>
        <div className={styles.productName}>{props.currentProductName}</div>
      </div>
    </div>
  )
}
