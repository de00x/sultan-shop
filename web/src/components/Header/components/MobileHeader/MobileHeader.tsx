import { BottomHeaderMobile, TopHeaderMobile } from './components'
import styles from './styles/MobileHeader.module.scss'
import { FC } from 'react'

export const MobileHeader: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <TopHeaderMobile />
      <BottomHeaderMobile />
    </div>
  )
}
