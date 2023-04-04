import { ReactComponent as PriceListSvg } from './img/price-listSVG.svg'
import { ReactComponent as CatalogSquare } from './img/catalogSVG.svg'
import { ReactComponent as SultanLogo } from './img/logoSultan.svg'
import { ReactComponent as SearchSvg } from './img/searchSVG.svg'
import { ReactComponent as CartSvg } from './img/cartSVG.svg'
import { BottomHeaderControllers } from './controllers'
import styles from './styles/BottomHeader.module.scss'
import { orderCallGirlImg } from './img'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const BottomHeader: FC = (): JSX.Element => {
  /// controllers ///

  const { searchSvgClick, totalCartPrice, cartData, searchRef } = BottomHeaderControllers()

  /// controllers ///

  return (
    <div className={styles.bottomHeaderContainer}>
      <div className={styles.sultanLogoContainer}>
        <SultanLogo />
      </div>
      <Link to={'/catalog'}>
        <div className={styles.catalogBtnContainer}>
          <button>
            Каталог
            <CatalogSquare />
          </button>
        </div>
      </Link>
      <div className={styles.searchContainer}>
        <input ref={searchRef} type="text" placeholder="Поиск..." />
        <div className={styles.searchSvgContainer} onClick={searchSvgClick}>
          <SearchSvg />
        </div>
      </div>
      <div className={styles.orderCallContainer}>
        <div className={styles.orderCallLeftBlock}>
          <div>+7 (777) 490-00-91</div>
          <div>время работы: 9:00-20:00</div>
          <div>Заказать звонок</div>
        </div>
        <div className={styles.orderCallRightBlock}>
          <img src={orderCallGirlImg} alt="orderCallGirlImg" />
        </div>
      </div>
      <div className={styles.priceListBtnContainer}>
        <button>
          Прайс-лист
          <PriceListSvg />
        </button>
      </div>
      <div className={styles.cartContainer}>
        <Link to={'/cart'}>
          <div className={styles.cartLeftBlock}>
            <CartSvg />
            <div className={styles.cartCurrentItems}>{cartData.length}</div>
          </div>
        </Link>
        <div className={styles.cartRightBlock}>
          <div>Корзина</div>
          <div>{totalCartPrice} ₽</div>
        </div>
      </div>
    </div>
  )
}
