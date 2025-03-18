import { useEffect } from "react"

const AppLayout = ({ children, className }) => {
  // automatically scroll to top when you navigate to another page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`w-full lg:px-24 md:px-16 sm:px-7 px-4 ${className}`}>
      {children}
    </div>
  )
}

export default AppLayout
