import { ReactComponent as SearchBtn } from './img/searchSVG.svg'
import { CatalogContext } from '../../../../CatalogContext'
import styles from './styles/ByProducerMobile.module.scss'
import { FC, useContext } from 'react'

export const ByProducerMobile: FC = (): JSX.Element => {
  const { sortByData, setSortByData } = useContext(CatalogContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Производитель</div>
      <div className={styles.inputByProducer}>
        <input
          type="text"
          placeholder="Поиск..."
          value={sortByData.byProducerData}
          onChange={(e) => setSortByData({ ...sortByData, byProducerData: e.target.value })}
        />
        <div className={styles.btnSearch}>
          <SearchBtn />
        </div>
      </div>
    </div>
  )
}
