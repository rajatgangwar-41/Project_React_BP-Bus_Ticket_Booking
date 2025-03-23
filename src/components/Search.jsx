/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import { TbArrowsExchange } from "react-icons/tb"
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { IoMdCloseCircle } from "react-icons/io"
import { useFilter } from "../hooks/useFilter"

const Search = () => {
  const { state, setSearch, applyFilter, resetFilters } = useFilter()
  const navigate = useNavigate()

  const handleSubmit = () => {
    applyFilter()
    navigate("/tickets")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="w-full sm:w-8/10 xl:w-full mx-auto bg-neutral-50/1 border-2 border-neutral-300 shadow-lg p-5 rounded-xl"
    >
      <div className="w-full mx-auto flex flex-col xl:flex-row items-center gap-5">
        {/* Search Fields */}
        <div className="w-full mx-auto xl:w-flex-1 flex flex-col xl:flex-row items-center gap-15 xl:gap-5 relative">
          <div className="w-full mx-auto xl:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="text"
              name="routeFrom"
              value={state.search.routeFrom}
              onChange={(e) => setSearch({ [e.target.name]: e.target.value })}
              className="flex flex-1 h-full border-none bg-transparent focus:outline-none"
              placeholder="From..."
            />
            <div className="w-5 h-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>
          <div className="w-full xl:w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="text"
              name="routeTo"
              value={state.search.routeTo}
              onChange={(e) => setSearch({ [e.target.name]: e.target.value })}
              className="flex flex-1 h-full border-none bg-transparent focus:outline-none"
              placeholder="To..."
            />
            <div className="w-5 h-5 text-neutral-400">
              <FaMapMarkerAlt className="w-full h-full" />
            </div>
          </div>
          <button className="absolute w-full xl:w-11 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-primary">
            <TbArrowsExchange className="w-full h-full xl:w-6 xl:h-6 text-neutral-50" />
          </button>
        </div>

        {/* Date and Buttons */}
        <div className="w-full xl:flex-1 flex flex-wrap xl:flex-nowrap items-center gap-3">
          <div className="w-full xl:flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg flex items-center gap-x-1">
            <input
              type="date"
              name="date"
              value={state.search.date}
              onChange={(e) => setSearch({ [e.target.name]: e.target.value })}
              className="flex-1 h-full border-none bg-transparent focus:outline-none"
            />
          </div>

          <button
            onClick={() => resetFilters()}
            className="w-full xl:w-auto xl:min-w-[140px] h-full xl:h-14 px-5 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-lg font-semibold text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer whitespace-nowrap"
          >
            <IoMdCloseCircle className="w-6 h-6" />
            <span>Clear Filter</span>
          </button>

          <button
            onClick={handleSubmit}
            className="w-full xl:w-auto h-full xl:h-14 px-5 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-lg font-semibold text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer whitespace-nowrap"
          >
            <FaSearch className="w-6 h-6" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Search
