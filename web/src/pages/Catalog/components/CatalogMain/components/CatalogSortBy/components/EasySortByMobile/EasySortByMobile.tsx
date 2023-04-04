import { CatalogHeaderControllers } from '../../../CatalogHeader/controllers'
import { CatalogContext } from '../../../../CatalogContext'
import styles from './styles/EasySortByMobile.module.scss'
import { CSSTransition } from 'react-transition-group'
import { FC, useContext, useState } from 'react'

export const EasySortByMobile: FC = (): JSX.Element => {
  const [sortFly, setSortFly] = useState(false)
  const [sortFlyTitle, setSortFlyTitle] = useState('Названию')

  const { setCatalogAllProducts } = useContext(CatalogContext)

  /// controllers ///

  const { renameSortByTitle } = CatalogHeaderControllers({
    setSortFly,
    setSortFlyTitle,
    setCatalogAllProducts,
  })

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      <div className={styles.sortContainer}>
        Сортировка:
        <span onClick={() => setSortFly(!sortFly)}>
          {sortFlyTitle} {sortFly ? '▲' : '▼'}
        </span>
        <CSSTransition in={sortFly} classNames="sortByFly" timeout={300} unmountOnExit>
          <div className={styles.sortByFly}>
            <div onClick={renameSortByTitle('Названию')}>По названию</div>
            <div onClick={renameSortByTitle('Цене')}>По цене</div>
            <div onClick={renameSortByTitle('Убыванию')}>По убыванию</div>
            <div onClick={renameSortByTitle('Возрастанию')}>По возрастанию</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}
