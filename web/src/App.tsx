import { Cart, Catalog, ProductCard } from './pages'
import { Route, Routes } from 'react-router-dom'
import { AppControllers } from './controllers'
import { CartContext } from './CartContext'
import { AppService } from './services'
import { FC } from 'react'
import './index.css'

const App: FC = (): JSX.Element => {
  /// controllers ///

  const {
    cartData,
    isTheCart,
    setCartData,
    totalCartPrice,
    setTotalCartPrice,
    productCardGoToCart,
    handlerProductInCart,
    handlerCounterInCart,
  } = AppControllers()

  /// controllers ///

  /// useEffects ///

  AppService.GetCartDataByLS(setCartData)

  AppService.SetCartDataByLS(totalCartPrice)

  /// useEffects ///

  return (
    <CartContext.Provider
      value={{
        cartData,
        isTheCart,
        setCartData,
        totalCartPrice,
        setTotalCartPrice,
        productCardGoToCart,
        handlerProductInCart,
        handlerCounterInCart,
      }}
    >
      <Routes>
        <Route path="*" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product-card/:productCardId" element={<ProductCard />} />
      </Routes>
    </CartContext.Provider>
  )
}

export default App
