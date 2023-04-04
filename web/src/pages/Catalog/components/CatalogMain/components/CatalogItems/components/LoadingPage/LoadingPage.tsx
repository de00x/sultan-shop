import { loadingPageUtils } from '../../utils/loadingPageUtils'
import styles from './styles/LoadingPage.module.scss'
import { FC } from 'react'

export const LoadingPage: FC = (): JSX.Element => {
  return (
    <div className={styles.cartDataIsEmptyContainer}>
      {loadingPageUtils.map((loadingItem) => (
        <div key={loadingItem}></div>
      ))}
    </div>
  )
}
