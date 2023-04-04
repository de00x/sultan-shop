import { createContext } from 'react'
import { ICartContext } from '../types/CartContext.types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CartContext = createContext<ICartContext>({} as ICartContext)
