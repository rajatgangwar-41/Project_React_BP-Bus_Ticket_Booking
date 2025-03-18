import { useEffect, useState } from "react"

const ErrorMessage = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [countDown, setCountDown] = useState(10)

  useEffect(() => {
    if (countDown > 0) {
      const timer = setInterval(() => {
        setCountDown((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else setIsVisible(false)
  }, [countDown])

  if (!isVisible) return null

  return (
    <div className="fixed top-28 p-4 right-4 mb-4 text-sm text-neutral-50 bg-primary rounded-xl shadow-lg transition-transform transform-gpu animate-slide-in">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <span className="ml-4 font-bold">{countDown}</span>
      </div>
    </div>
  )
}

export default ErrorMessage
