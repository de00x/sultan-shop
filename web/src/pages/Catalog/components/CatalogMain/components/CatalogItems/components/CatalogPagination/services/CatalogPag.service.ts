import { useEffect } from 'react'

const CatalogPagService = {
  GetCurrentCatalogPage() {
    useEffect(() => {
      localStorage.setItem('currentCatalogPage', '1')
    }, [])
  },
}

export default CatalogPagService
