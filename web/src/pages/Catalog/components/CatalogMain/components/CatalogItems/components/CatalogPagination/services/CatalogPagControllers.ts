import { IProduct } from '../../../../../../../../../types/Product.types'
import axios from 'axios'

interface ICatalogPagControllersProps {
  currentPaginationPage: number
  changeProductsByParameters: (products: IProduct[]) => void
  setCurrentPaginationPage: React.Dispatch<React.SetStateAction<number>>
}

const CatalogPagControllers = (props: ICatalogPagControllersProps) => {
  const clickNextPage = (currentPage: number) => {
    props.setCurrentPaginationPage(currentPage)

    localStorage.setItem('currentCatalogPage', String(currentPage))
    axios
      .get(`/allProducts/?currentPage=${currentPage}`)
      .then((res) => props.changeProductsByParameters(res.data))
      .catch((err) => console.log('err', err))
  }

  const clickLeftPage = () => {
    const currentCatalogPage = Number(localStorage.getItem('currentCatalogPage')) - 1

    if (props.currentPaginationPage === 1) {
      props.setCurrentPaginationPage(5)
      clickNextPage(5)
    } else {
      props.setCurrentPaginationPage((prev) => prev - 1)
      clickNextPage(currentCatalogPage)
    }
  }

  const clickRightPage = () => {
    const currentCatalogPage = Number(localStorage.getItem('currentCatalogPage')) + 1

    if (props.currentPaginationPage === 5) {
      props.setCurrentPaginationPage(1)
      clickNextPage(1)
    } else {
      props.setCurrentPaginationPage((prev) => prev + 1)
      clickNextPage(currentCatalogPage)
    }
  }
  return { clickNextPage, clickLeftPage, clickRightPage }
}

export default CatalogPagControllers
