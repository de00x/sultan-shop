import { CatalogHeaderControllers } from './controllers'
import styles from './styles/CatalogHeader.module.scss'
import { CSSTransition } from 'react-transition-group'
import { CatalogContext } from '../../CatalogContext'
import { FC, useContext, useState } from 'react'
import { locationItemsArray } from './utils'
import './styles/index.scss'
import cn from 'classnames'

export const CatalogHeader: FC = (): JSX.Element => {
  const [sortFly, setSortFly] = useState(false)
  const [sortFlyTitle, setSortFlyTitle] = useState('Названию')

  const { sortByData, setCatalogAllProducts, clickCurrentItem } = useContext(CatalogContext)

  /// controllers ///

  const { renameSortByTitle } = CatalogHeaderControllers({
    setSortFly,
    setSortFlyTitle,
    setCatalogAllProducts,
  })

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      <div className={styles.locationContainer}>
        <div>Главная</div>
        <div>Каталог товаров</div>
      </div>
      <div className={styles.currentLocation__SortBy}>
        <div className={styles.currentLocation}>Каталог</div>
        <div className={styles.sortByContainer}>
          <div className={styles.sortTitle}>Сортировка:</div>
          <div
            className={cn(styles.currentSort, { [styles.currentSortOpen]: sortFly })}
            onClick={() => setSortFly(!sortFly)}
          >
            {sortFlyTitle} {sortFly ? '▲' : '▼'}
          </div>
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
      <div className={styles.locationsContainer}>
        {locationItemsArray.map((location, i) => (
          <div
            className={cn(styles.locationItem, {
              [styles.locationItemActive]:
                `${location.firstText} ${location.secondText}` === sortByData.careOf,
            })}
            key={i}
            onClick={() => clickCurrentItem(location)}
          >
            <div>{location.firstText}</div> {location.secondText}
          </div>
        ))}
      </div>
    </div>
  )
}
