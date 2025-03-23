/* eslint-disable no-unused-vars */
import { FaBus } from "react-icons/fa6"
import { GrRefresh } from "react-icons/gr"
import { TicketCard } from "../components"
import { useState, useRef } from "react"
import { noResult } from "../assets"
import { motion, useInView } from "motion/react"
import { useFilter } from "../hooks/useFilter"

const BusItem = ({ bus }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <TicketCard icon={FaBus} bus={bus} />
    </motion.li>
  )
}

const SearchResult = () => {
  const [busCount, setBusCount] = useState(5)
  const { state } = useFilter()

  const handleBusCountChange = () => {
    setBusCount((prev) => Math.min(prev + 5, state?.filteredData?.length)) // Load 5 more each click
  }

  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <ul className="space-y-6">
        {state?.filteredData?.slice(0, busCount).map((bus, index) => (
          <BusItem key={index} bus={bus} />
        ))}
      </ul>

      {busCount < state?.filteredData?.length && (
        <motion.div
          className="w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleBusCountChange}
            className="w-fit px-8 py-3 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <GrRefresh />
            </motion.div>
            Load More
          </motion.button>
        </motion.div>
      )}

      {state?.filteredData?.length === 0 && (
        <motion.div
          className="w-full flex relative -top-20 items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={noResult}
            alt="No Result Found"
            className="mix-blend-multiply"
          />
        </motion.div>
      )}
    </div>
  )
}

export default SearchResult
