import { useState } from 'react'

const ByParamMobileService = () => {
  const [openSortBy, setOpenSortBy] = useState(false)

  const reverseOpenSort = () => {
    return () => {
      setOpenSortBy(!openSortBy)
    }
  }
  return { reverseOpenSort, openSortBy }
}

export default ByParamMobileService
