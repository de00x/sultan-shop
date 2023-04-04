import { CatalogContext } from '../../../../../../../../pages/Catalog/components/CatalogMain/CatalogContext'
import CatalogPagControllers from './services/CatalogPagControllers'
import { ReactComponent as ArrowRight } from './img/arrowRight.svg'
import { ReactComponent as ArrowLeft } from './img/arrowLeft.svg'
import CatalogPagService from './services/CatalogPag.service'
import styles from './styles/CatalogPagination.module.scss'
import { FC, useContext, useState } from 'react'
import { pagesArray } from './utils/PagesArray'

export const CatalogPagination: FC = (): JSX.Element => {
  const [currentPaginationPage, setCurrentPaginationPage] = useState(1)

  const { sortByData, changeProductsByParameters } = useContext(CatalogContext)

  /// useEffects ///

  CatalogPagService.GetCurrentCatalogPage()

  /// useEffects ///

  /// controllers ///

  const { clickNextPage, clickLeftPage, clickRightPage } = CatalogPagControllers({
    currentPaginationPage,
    setCurrentPaginationPage,
    changeProductsByParameters,
  })

  /// controllers ///

  const sortByLength =
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    sortByData.inputFrom.length +
    sortByData.inputBefore.length +
    sortByData.byProducerData.length +
    sortByData.careOf.length

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {sortByLength === 0 && (
          <div className={styles.arrowLeft}>
            <ArrowLeft onClick={clickLeftPage} />
          </div>
        )}
        <div className={styles.currentPageContainer}>
          {sortByLength === 0 && (
            <>
              {pagesArray.map((page) => (
                <div
                  key={page}
                  onClick={() => clickNextPage(page)}
                  className={currentPaginationPage === page ? styles.currentPageActive : ''}
                >
                  {page}
                </div>
              ))}
            </>
          )}
        </div>
        {sortByLength === 0 && (
          <div className={styles.arrowRight}>
            <ArrowRight onClick={clickRightPage} />
          </div>
        )}
      </div>
    </div>
  )
}
