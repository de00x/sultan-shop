import styles from './styles/CatalogHeaderMobile.module.scss'
import { FC } from 'react'

export const CatalogHeaderMobile: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnBackPage}>
        <div>{'<'}</div>НАЗАД
      </div>
      <div className={styles.currentLocation}>КАТАЛОГ</div>
    </div>
  )
}
