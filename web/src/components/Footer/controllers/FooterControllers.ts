import { useRef } from 'react'

const FooterControllers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputEmailRef: any = useRef(null)
  const inputEmailRefBtn = () => {
    if (inputEmailRef !== null) inputEmailRef.current.focus()
  }

  return { inputEmailRefBtn, inputEmailRef }
}

export default FooterControllers
