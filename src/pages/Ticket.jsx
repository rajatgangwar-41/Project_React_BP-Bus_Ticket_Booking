/* eslint-disable no-unused-vars */
import { busInside } from "../assets"
import { Search, Filter, SearchResult } from "../components"
import { AppLayout, TopLayout } from "../layout"
import { motion } from "motion/react"

const Ticket = () => {
  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout
        bgImg={busInside}
        title="Reserve Your Ticket"
        className=""
      ></TopLayout>
      {/* Root Layout */}
      <AppLayout className="space-y-12 relative">
        {/* Search Section */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <motion.h1
            className="text-3xl text-neutral-700 font-semibold"
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
        <div className="w-full h-auto grid grid-cols-4 gap-16 relative">
          {/* Filter Section */}
          <div className="col-span-1">
            <Filter className="space-y-4 sticky top-52" />
          </div>
          {/* Search Tickets */}
          <SearchResult />
        </div>
      </AppLayout>
    </div>
  )
}

export default Ticket
