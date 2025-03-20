/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import { useContext, useEffect } from "react"
import { TbArrowsExchange } from "react-icons/tb"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import { Context } from "../App"
import { useNavigate } from "react-router-dom"
import useFilter from "../hooks/useFilter"
import { IoMdCloseCircle } from "react-icons/io"

const Search = () => {
  const { search, setSearch, setFilteredData } = useContext(Context)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const { name, value } = e.target

    setSearch((prev) => {
      return { ...prev, [name]: value }
    })

    console.log(name, value)
  }

  const handleClearFilter = () => {
    setSearch({ routeFrom: "", routeTo: "", date: "" })
  }

  const handleSubmit = () => {
    const filteredData = useFilter(search)
    setFilteredData(filteredData)
    navigate("/tickets")
  }

  useEffect(() => {
    if (search.routeFrom === "" && search.routeTo === "" && search.date === "")
      setFilteredData(useFilter(search))
  }, [search, setFilteredData])

  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full bg-neutral-50 border-2 border-neutral-300 shadow-lg p-5 rounded-xl"
    >
      <div className="w-full flex items-center gap-5 justify-between">
        <div className="w-[60%] flex items-center gap-5 relative">
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="text"
              name="routeFrom"
              value={search.routeFrom}
              onChange={handleSearch}
              className="flex flex-1 h-full border-none bg-transparent focus:outline-none"
              placeholder="From..."
            />
            <div className="w-5 h-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>
          <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="text"
              name="routeTo"
              value={search.routeTo}
              onChange={handleSearch}
              className="flex flex-1 h-full border-none bg-transparent focus:outline-none"
              placeholder="To..."
            />
            <div className="w-5 h-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>
          <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary">
            <TbArrowsExchange className="w-6 h-6 text-neutral-50" />
          </button>
        </div>
        <div className="flex flex-1 h-14 items-center gap-5">
          <div className="flex-1 h-full border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="date"
              name="date"
              value={search.date}
              onChange={handleSearch}
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
            />
          </div>

          <button
            onClick={handleClearFilter}
            className="w-fit h-full px-5 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
          >
            <IoMdCloseCircle className="w-6 h-6" /> Clear Filter
          </button>
          <button
            onClick={handleSubmit}
            className="w-fit h-full px-5 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
          >
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Search
