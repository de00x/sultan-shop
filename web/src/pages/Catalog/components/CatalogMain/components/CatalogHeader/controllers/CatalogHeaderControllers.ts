import { ICatalogHeaderControllersProps } from '../types/CatalogHeader.types'

const CatalogHeaderControllers = (props: ICatalogHeaderControllersProps) => {
  const handlerSort = (sortBy: string) => {
    switch (sortBy) {
      case 'Возрастанию': {
        props.setCatalogAllProducts((prev) =>
          [...prev].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        )
        break
      }
      case 'Убыванию': {
        props.setCatalogAllProducts((prev) =>
          [...prev].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        )
        break
      }
      case 'Названию': {
        props.setCatalogAllProducts((prev) =>
          [...prev].sort((a, b) => a.name.localeCompare(b.name))
        )
        break
      }
      default: {
        break
      }
    }
  }

  const renameSortByTitle = (currentSortBy: string) => {
    return () => {
      props.setSortFlyTitle(currentSortBy)
      handlerSort(currentSortBy)
      props.setSortFly(false)
    }
  }

  return { renameSortByTitle }
}

export default CatalogHeaderControllers
