import { useState } from 'react'
import { IProduct } from '../../types/Product.types'
import {
  ETypePrice,
  EtypeProductAddOrDel,
  EtypeProductCounter,
  EtypeProductLS,
} from '../../types/CartContext.types'

const AppControllers = () => {
  const [cartData, setCartData] = useState<IProduct[]>([])
  const [totalCartPrice, setTotalCartPrice] = useState(
    Number(localStorage.getItem('totalCartPrice'))
  )

  const handlerChangePrice = (product: IProduct, actionPrice: ETypePrice) => {
    if (actionPrice === ETypePrice.plus) {
      setTotalCartPrice((prev) => prev + parseFloat(product.price))
    }
    if (actionPrice === ETypePrice.minus) {
      setTotalCartPrice((prev) => prev - parseFloat(product.price))
    }
    if (actionPrice === ETypePrice.delete) {
      setTotalCartPrice((prev) => prev - parseFloat(product.price) * product.counterInCart)
    }
  }

  const handlerChangeLS = (product: IProduct, actionLS: EtypeProductLS) => {
    if (actionLS === EtypeProductLS.add) {
      localStorage.setItem('cart', JSON.stringify([...cartData, product]))
    }
    if (actionLS === EtypeProductLS.delete) {
      const prevLSCartData = localStorage.getItem('cart')
      if (prevLSCartData !== null) {
        const LSCartDataParse = JSON.parse(prevLSCartData)
        const LSCartData = LSCartDataParse.filter(
          (prevProduct: IProduct) => prevProduct.id !== product.id
        )
        localStorage.setItem('cart', JSON.stringify(LSCartData))
      }
    }
  }

  const saveNewDataInLS = (newDate: IProduct[]) => {
    localStorage.setItem('cart', JSON.stringify(newDate))
  }

  const isTheCart = (productID: number) => {
    return cartData.find((cartItem) => cartItem.id === productID)
  }

  const handlerProductInCart = (product: IProduct, actionProduct: EtypeProductAddOrDel) => {
    if (actionProduct === EtypeProductAddOrDel.add) {
      if (isTheCart(product.id) === undefined) {
        setCartData((prev) => [...prev, product])
        handlerChangePrice(product, ETypePrice.plus)
        handlerChangeLS(product, EtypeProductLS.add)
      }
    }
    if (actionProduct === EtypeProductAddOrDel.delete) {
      setCartData((prev) => prev.filter((prevProduct) => prevProduct.id !== product.id))
      handlerChangePrice(product, ETypePrice.delete)
      handlerChangeLS(product, EtypeProductLS.delete)
    }
  }

  const productCardGoToCart = (product: IProduct, counter: number) => {
    if (isTheCart(product.id) === undefined) {
      product.counterInCart = counter
      product.price = String(parseFloat(product.price) * counter)
      setCartData((prev) => [...prev, product])
      handlerChangePrice(product, ETypePrice.plus)
      handlerChangeLS(product, EtypeProductLS.add)
    } else {
      setCartData((prev) =>
        prev.map((currentProduct) =>
          currentProduct.id === product.id
            ? { ...currentProduct, counterInCart: currentProduct.counterInCart + counter }
            : currentProduct
        )
      )
      product.counterInCart = product.counterInCart + counter
      product.price = String(parseFloat(product.price) * counter)
      handlerChangePrice(product, ETypePrice.plus)
      const newCartData = cartData.map((currentProduct) =>
        currentProduct.id === product.id
          ? { ...currentProduct, counterInCart: currentProduct.counterInCart + counter }
          : currentProduct
      )
      saveNewDataInLS(newCartData)
    }
  }

  const handlerCounterInCart = (product: IProduct, actionProductCounter: EtypeProductCounter) => {
    if (actionProductCounter === EtypeProductCounter.plus) {
      setCartData((prev) =>
        prev.map((currentProduct) =>
          currentProduct.id === product.id
            ? { ...currentProduct, counterInCart: currentProduct.counterInCart + 1 }
            : currentProduct
        )
      )
      handlerChangePrice(product, ETypePrice.plus)
      const newCartData = cartData.map((currentProduct) =>
        currentProduct.id === product.id
          ? { ...currentProduct, counterInCart: currentProduct.counterInCart + 1 }
          : currentProduct
      )
      saveNewDataInLS(newCartData)
    }
    if (actionProductCounter === EtypeProductCounter.minus) {
      setCartData((prev) =>
        prev.map((currentProduct) =>
          currentProduct.id === product.id
            ? { ...currentProduct, counterInCart: currentProduct.counterInCart - 1 }
            : currentProduct
        )
      )
      handlerChangePrice(product, ETypePrice.minus)
    }
  }

  return {
    cartData,
    isTheCart,
    setCartData,
    totalCartPrice,
    handlerChangeLS,
    saveNewDataInLS,
    setTotalCartPrice,
    handlerChangePrice,
    handlerProductInCart,
    handlerCounterInCart,
    productCardGoToCart,
  }
}

export default AppControllers
