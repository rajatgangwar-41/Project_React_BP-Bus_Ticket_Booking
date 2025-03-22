/* eslint-disable no-unused-vars */
import { AppLayout } from "../layout"
import { TopSearchCard } from "../components"
import { busData } from "../constants"
import { motion } from "motion/react"
import { useContext } from "react"
import { Context } from "../context/context"

const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Staggered effect
  },
}

const itemVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50, // Left for even, right for odd
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const TopSearch = () => {
  const { state } = useContext(Context)

  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, x: 800 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold text-neutral-800"
        >
          Top Search <span className="text-primary">Routes</span>
        </motion.h1>
      </div>
      {/* Top Search Ticket Routes Card */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full grid grid-cols-3 gap-5"
      >
        {state.originalData.slice(0, 6).map((bus, index) => {
          return (
            <motion.li key={index} variants={itemVariants} custom={index}>
              <TopSearchCard bus={bus} />
            </motion.li>
          )
        })}
      </motion.ul>
    </AppLayout>
  )
}

export default TopSearch
