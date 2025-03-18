import { useEffect, useRef, useState } from "react"

const ToggleButton = ({ buttonText, buttonTextHidden, children }) => {
  const [isVisible, setIsVisible] = useState(true)
  const toggleRef = useRef()

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const handleOutside = (e) => {
    if (toggleRef.current && !toggleRef.current.contains(e.target))
      setIsVisible(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [])
  return (
    <div className="w-full h-auto" ref={toggleRef}>
      <button
        onClick={handleToggleVisibility}
        className={`w-fit px-4 py-2 border-2 border-primary rounded-lg transition ${
          isVisible
            ? "bg-primary text-neutral-50"
            : "border-primary bg-transparent text-primary"
        }`}
      >
        {isVisible ? buttonTextHidden : buttonText}
      </button>
      {isVisible && (
        <div className="mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm">
          {children}
        </div>
      )}
    </div>
  )
}

export default ToggleButton
