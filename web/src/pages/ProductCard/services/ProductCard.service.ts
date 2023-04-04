import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../CartContext'
import { IProduct } from '../../../types/Product.types'

const ProductCardService = {
  GetProductCard(
    setProductCardData: React.Dispatch<React.SetStateAction<IProduct[]>>,
    setCurrentProductName: React.Dispatch<React.SetStateAction<string>>
  ) {
    const { productCardId } = useParams()
    const { cartData } = useContext(CartContext)
    console.log('la')

    useEffect(() => {
      if (productCardId !== undefined) {
        axios
          .get(`/productCard/?id=${productCardId}`)
          .then((res) => {
            setProductCardData(res.data)
            setCurrentProductName(res.data.find((product: IProduct) => product.name).name)
          })
          .catch((err) => console.log('err', err))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartData])
  },
}

export default ProductCardService
