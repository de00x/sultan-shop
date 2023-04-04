import { createContext } from 'react'
import { ICatalogContext } from '../types/CatalogMain.types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CatalogContext = createContext<ICatalogContext>({} as ICatalogContext)
