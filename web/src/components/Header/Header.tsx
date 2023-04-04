import { BottomHeader, MobileHeader, TopHeader } from './components'
import styles from './styles/Header.module.scss'
import { FC } from 'react'

export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.headerWrapper}>
      <TopHeader />
      <BottomHeader />
      <MobileHeader />
    </div>
  )
}
