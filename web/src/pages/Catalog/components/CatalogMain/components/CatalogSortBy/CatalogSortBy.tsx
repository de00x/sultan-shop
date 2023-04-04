import {
  ByCareOf,
  ByProducer,
  ByParameters,
  EasySortByMobile,
  ByCareOfMobile,
  ByProducerMobile,
  ByParametersMobile,
} from './components'
import { FC } from 'react'
import styles from './styles/CatalogSortBy.module.scss'

export const CatalogSortBy: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <ByParameters />
      <ByParametersMobile />
      <ByProducer />
      <ByProducerMobile />
      <ByCareOf />
      <ByCareOfMobile />
      <EasySortByMobile />
    </div>
  )
}
