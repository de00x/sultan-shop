// import { BottomHeaderControllers } from '../../../BottomHeader/controllers'
import { BottomHeaderControllers } from '../../../BottomHeader/controllers'
import { ReactComponent as LogoSultan } from './img/logoSultan.svg'
import { ReactComponent as SidebarMenu } from './img/menu.svg'
import { ReactComponent as Cart } from './img/cartSVG.svg'
import styles from './styles/TopHeaderMobile.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const TopHeaderMobile: FC = (): JSX.Element => {
  const { cartData } = BottomHeaderControllers()

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebarMenu}>
        <SidebarMenu />
      </div>
      <div className={styles.logoSultan}>
        <LogoSultan />
      </div>
      <div className={styles.cart}>
        <Link to={'/cart'}>
          <Cart />
          <span className={styles.totalProductInCart}>{cartData.length}</span>
        </Link>
      </div>
    </div>
  )
}
