import React, { useEffect, useState } from "react"
import { FaBars, FaX } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Tickets", link: "/tickets" },
    { label: "About", link: "/about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollState = window.scrollY

      if (currentScrollState > scrollPosition && currentScrollState > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setScrollPosition(currentScrollState)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPosition])

  return (
    <nav
      className={`w-full h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-10 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${scrollPosition > 50 ? "bg-violet-200" : "bg-neutral-100/10"}`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-primary font-bold">
          Bus
        </Link>
        <div
          className="w-fit md:hidden flex flex-col gap-1 text-neutral-700 items-center justify-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaX className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </div>
        <div
          className={`${
            open
              ? "flex absolute top-20 left-0 w-full h-auto md:relative"
              : "hidden"
          } flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-0 sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-50 border md:border-transparent border-neutral-200 md:shadow-none sm:shadow-md shadow-md rounded-xl`}
        >
          <ul className="list-none flex md:items-center items-start flex-col md:flex-row flex-wrap md:flex-wrap md:gap-8 gap-4 text-lg text-neutral-500 font-normal">
            {navItems.map((item, ind) => (
              <li key={ind}>
                <Link
                  to={item.link}
                  className="hover:text-primary ease-in-out duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <button className="md:w-fit w-full md:px-4 px-6 md:py-1 py-2 5 hover:bg-transparent bg-primary border border-primary hover:border-primary md:rounded-full rounded-xl text-base font-medium text-neutral-50 hover:text-primary ease-in-out duration-300 cursor-pointer">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
