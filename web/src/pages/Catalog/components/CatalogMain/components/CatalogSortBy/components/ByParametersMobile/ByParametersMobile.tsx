import styles from './styles/ByParametersMobile.module.scss'
import { CatalogContext } from '../../../../CatalogContext'
import { ByParamMobileService } from './services'
import { FC, useContext } from 'react'

export const ByParametersMobile: FC = (): JSX.Element => {
  const { sortByData, setSortByData } = useContext(CatalogContext)

  /// controllers ///

  const { reverseOpenSort, openSortBy } = ByParamMobileService()

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      <div className={styles.openSortBy} onClick={reverseOpenSort()}>
        <div>ПОДБОР ПО ПАРАМЕТРАМ</div>
        <div>{openSortBy ? '▲' : '▼'}</div>
      </div>
      {openSortBy && (
        <div className={styles.sortByContainer}>
          <div className={styles.sortByPriceTitle}>
            Цена <span>₽</span>
          </div>
          <div className={styles.sortByInputContainer}>
            <input
              placeholder="0"
              type="number"
              value={sortByData.inputFrom}
              onChange={(e) => setSortByData({ ...sortByData, inputFrom: e.target.value })}
            />
            <span>-</span>
            <input
              placeholder="10 000"
              type="number"
              value={sortByData.inputBefore}
              onChange={(e) => setSortByData({ ...sortByData, inputBefore: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  )
}
