import styles from './styles/BottomHeaderMobile.module.scss'
import { ReactComponent as Catalog } from './img/catalog.svg'
import { ReactComponent as Search } from './img/search.svg'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const BottomHeaderMobile: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.catalog}>
        <Link to={'/catalog'}>
          <Catalog />
          Каталог
        </Link>
      </div>
      <div className={styles.search}>
        <Search />
        Поиск
      </div>
    </div>
  )
}
