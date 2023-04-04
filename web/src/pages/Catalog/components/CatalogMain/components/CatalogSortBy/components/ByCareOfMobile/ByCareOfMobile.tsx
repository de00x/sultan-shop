import { locationItemsArray } from '../../../CatalogHeader/utils/locationItemsArray'
import { ILocationItem } from '../../../CatalogHeader/types/CatalogHeader.types'
import { CatalogContext } from '../../../../CatalogContext'
import styles from './styles/ByCareOfMobile.module.scss'
import { FC, useContext } from 'react'
import cn from 'classnames'

export const ByCareOfMobile: FC = (): JSX.Element => {
  const { sortByData, clickCurrentItem } = useContext(CatalogContext)

  return (
    <div className={styles.wrapper}>
      {locationItemsArray.map((location: ILocationItem, i) => (
        <div
          key={i}
          className={cn(styles.locationItem, {
            [styles.locationItemActive]:
              `${location.firstText} ${location.secondText}` === sortByData.careOf,
          })}
          onClick={() => clickCurrentItem(location)}
        >
          {location.firstText} {location.secondText}
        </div>
      ))}
    </div>
  )
}
