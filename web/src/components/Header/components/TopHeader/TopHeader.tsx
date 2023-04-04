import { ReactComponent as ContactUsSVG } from './img/headerContactUs.svg'
import { ReactComponent as LocationSVG } from './img/headerLocation.svg'
import styles from './styles/TopHeader.module.scss'
import { FC } from 'react'

export const TopHeader: FC = (): JSX.Element => {
  return (
    <div className={styles.topHeaderContainer}>
      <div className={styles.topHeaderLeftBlock}>
        <div className={styles.locationSvgContainer}>
          <LocationSVG />
        </div>
        <div className={styles.topHeaderLocation}>
          <div>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
          <div>(Рынок Восточный)</div>
        </div>
        <div className={styles.contactUsSvgContainer}>
          <ContactUsSVG />
        </div>
        <div className={styles.topHeaderContactUs}>
          <div>opt.sultan@mail.ru</div>
          <div>На связи в любое время</div>
        </div>
      </div>
      <div className={styles.topHeaderRightBlock}>
        <div>О компании</div>
        <div>Доставка и оплата</div>
        <div>Возврат</div>
        <div>Контакты</div>
      </div>
    </div>
  )
}
