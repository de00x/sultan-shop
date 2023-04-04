import styles from './styles/Catalog.module.scss'
import { Header, Footer } from '../../components'
import { CatalogMain } from './components'
import { FC } from 'react'

export const Catalog: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <CatalogMain />
      <Footer />
    </div>
  )
}
