import { IProduct } from '../../../../../types/Product.types'
import { ISortByData } from '../types/CatalogMain.types'
import { useDebounce } from 'usehooks-ts'
import { useEffect } from 'react'
import axios from 'axios'

const CatalogMainService = {
  GetAllProducts(setCatalogAllProducts: React.Dispatch<React.SetStateAction<IProduct[]>>) {
    useEffect(() => {
      axios
        .get(`/allProducts/?currentPage=${1}`)
        .then((res) => setCatalogAllProducts(res.data))
        .catch((err) => console.log('err', err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  },
  GetProductsByParameters(
    sortByData: ISortByData,
    changeProductsByParameters: (products: IProduct[]) => void
  ) {
    const debouncedValue = useDebounce<ISortByData>(sortByData, 700)
    useEffect(() => {
      if (
        sortByData.inputFrom.length !== 0 ||
        sortByData.inputBefore.length !== 0 ||
        sortByData.byProducerData.length !== 0 ||
        sortByData.careOf.length !== 0
      ) {
        const dataFrom = sortByData.inputFrom.length === 0 ? '0' : sortByData.inputFrom
        const dataBefore = sortByData.inputBefore.length === 0 ? '10000' : sortByData.inputBefore
        const dataByProducer =
          sortByData.byProducerData.length === 0 ? '0' : sortByData.byProducerData
        const dataByCareOf = sortByData.careOf.length === 0 ? '0' : sortByData.careOf

        axios
          .get(
            `/searchByParameters/?priceFrom=${dataFrom}&priceBefore=${dataBefore}
          &producer=${dataByProducer}&careOf=${dataByCareOf}`
          )
          .then((res) => changeProductsByParameters(res.data))
          .catch((err) => console.log('err', err))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])
  },
}

export default CatalogMainService
