import { ReactComponent as SearchSvg } from './img/searchSVG.svg'
import { CatalogContext } from '../../../../CatalogContext'
import styles from './styles/ByProducer.module.scss'
import { FC, useContext } from 'react'

export const ByProducer: FC = (): JSX.Element => {
  /// controllers ///

  const { sortByData, setSortByData } = useContext(CatalogContext)

  /// controllers ///

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Производитель</div>
      <div className={styles.searchByProducer}>
        <input
          type="text"
          placeholder="Поиск..."
          value={sortByData.byProducerData}
          onChange={(e) => setSortByData({ ...sortByData, byProducerData: e.target.value })}
        />
        <div className={styles.searchByProducerBtn}>
          <SearchSvg />
        </div>
      </div>
    </div>
  )
}
