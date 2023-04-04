import { IProductCardMainControllProps } from '../types/ProductCardMain.types'

const ProductCardMainControllers = (props: IProductCardMainControllProps) => {
  const minusProductCounter = () => {
    if (props.productCardCounter !== 1) {
      props.setProductCardCounter((prev) => prev - 1)
    }
  }

  const plusProductCounter = () => {
    props.setProductCardCounter((prev) => prev + 1)
  }
  return {
    plusProductCounter,
    minusProductCounter,
  }
}

export default ProductCardMainControllers
