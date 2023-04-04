import { CatalogContext } from '../../../../CatalogContext'
import styles from './styles/ByParameters.module.scss'
import { FC, useContext } from 'react'

export const ByParameters: FC = (): JSX.Element => {
  const { sortByData, setSortByData } = useContext(CatalogContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</div>
      <div className={styles.price}>
        Цена <span>₽</span>
      </div>
      <div className={styles.currentPriceContainer}>
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
  )
}
