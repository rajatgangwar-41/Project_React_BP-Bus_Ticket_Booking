/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import { busInside } from "../assets"
import { Search, Filter, SearchResult } from "../components"
import { AppLayout, TopLayout } from "../layout"
import { motion } from "motion/react"
import { useFilter } from "../hooks/useFilter"

const Ticket = () => {
  const { resetFilter } = useFilter()

  // useEffect(() => {
  //   return () => resetFilter()
  // }, [resetFilter])

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Reserve Your Ticket" />

      {/* Root Layout */}
      <AppLayout className="space-y-5 relative">
        {/* Search Section */}
        <div className="w-full bg-neutral-50 flex flex-col space-y-5 items-center justify-center py-6">
          <motion.h1
            className="text-2xl sm:text-3xl text-center text-neutral-700 font-semibold"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.35, ease: "easeOut" }}
          >
            Want to change the route?
          </motion.h1>
          {/* Search */}
          <Search />
        </div>

        {/* Searched Bus Tickets */}
        <div className="w-full h-auto grid grid-cols-1 xl:grid-cols-4 gap-10">
          {/* Filter Section (Moves below on smaller screens) */}
          <div className="xl:col-span-1">
            <Filter className="space-y-4 lg:top-52" />
          </div>

          {/* Search Tickets */}
          <div className="xl:col-span-3">
            <SearchResult />
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default Ticket
