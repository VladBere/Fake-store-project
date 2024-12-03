import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

interface ConfettiProps {
  active: boolean
}

export function Confetti({ active }: ConfettiProps) {
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 })

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])

  useEffect(() => {
    detectSize()
  }, [])

  return (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      numberOfPieces={active? 150 : 0}
      recycle={true}
    />
  )
}