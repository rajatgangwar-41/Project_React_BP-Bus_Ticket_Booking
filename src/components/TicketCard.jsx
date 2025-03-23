/* eslint-disable no-unused-vars */
import { FaBus, FaCalendarWeek, FaStar, FaWifi } from "react-icons/fa6"
import { MdOutlineChair } from "react-icons/md"
import { RiVipFill } from "react-icons/ri"
import { TbAirConditioning } from "react-icons/tb"
import { Link } from "react-router-dom"
import { motion } from "motion/react"

const TicketCard = ({ icon: Icon, bus }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4"
    >
      <div className="space-y-5 w-full border-b border-neutral-300/60 pb-5">
        {/* Routes */}
        <div className="space-y-5">
          {/* Bus Info */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4">
            {/* Bus Company */}
            <div className="flex items-center gap-x-2">
              <FaBus className="h-5 w-5 text-primary" />
              <p className="text-lg text-neutral-700 font-semibold">
                {bus.busCompany}
              </p>
            </div>

            {/* Weekdays */}
            <div className="flex flex-wrap items-center gap-2">
              <FaCalendarWeek className="w-4 h-4 text-primary" />
              <ul className="flex gap-2 flex-wrap">
                {bus.weekDay.map((day, index) => (
                  <p
                    key={index}
                    className="text-sm bg-neutral-200/65 text-neutral-600 font-normal px-2 py-0.5 rounded-full"
                  >
                    {day}
                  </p>
                ))}
              </ul>
            </div>

            {/* Amenities & Rating */}
            <div className="flex flex-wrap items-center gap-2">
              {bus.amenities.some((a) =>
                a.toLowerCase().includes("air conditioning")
              ) && (
                <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-2 py-0.5">
                  <TbAirConditioning className="w-4 h-4 text-primary" />
                  <p className="text-xs text-neutral-600 font-normal">AC</p>
                </div>
              )}
              {bus.amenities.some((a) => a.toLowerCase().includes("wifi")) && (
                <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-2 py-0.5">
                  <FaWifi className="w-4 h-4 text-green-600" />
                  <p className="text-xs text-neutral-600 font-normal">Wifi</p>
                </div>
              )}
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-2 py-0.5">
                <FaStar className="w-4 h-4 text-yellow-600" />
                <p className="text-xs text-yellow-600 font-normal">
                  {bus.rating}
                </p>
              </div>
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-2 py-0.5">
                <RiVipFill className="w-4 h-4 text-primary" />
                <p className="text-xs text-neutral-600 font-normal">Sofa</p>
              </div>
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-2 py-0.5">
                <MdOutlineChair className="w-4 h-4 text-primary -rotate-90" />
                <p className="text-xs text-neutral-600 font-normal">
                  {bus.totalSeats} Seats
                </p>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="space-y-2">
            <div className="w-full flex items-center justify-between gap-x-2.5">
              <h1 className="text-xl sm:text-2xl text-neutral-600 font-semibold">
                {bus.arrivalTime}
              </h1>
              <div className="flex-1 border-dashed border border-neutral-300 relative">
                <p
                  className="absolute w-12 h-12 sm:w-14 sm:h-14 top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed 
            border border-neutral-400 rounded-full flex items-center justify-center"
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </p>
              </div>
              <h1 className="text-xl sm:text-2xl text-neutral-600 font-semibold">
                {bus.departureTime}
              </h1>
            </div>
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-sm sm:text-base text-neutral-500 font-normal">
                {bus.routeFrom}
              </p>
              <p className="text-sm sm:text-base text-neutral-500 font-normal">
                {bus.routeTo}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Price, Available Seats & Book Button */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4">
        {/* Price */}
        <h1 className="text-lg sm:text-xl text-neutral-700 font-semibold">
          Rs. {bus.price}
          <span className="text-sm text-neutral-500 font-normal">
            {" "}
            /per seat
          </span>
        </h1>

        {/* Available Seats */}
        <h1 className="text-sm sm:text-base text-neutral-600 font-normal flex items-center gap-x-1.5">
          <span className="text-lg sm:text-xl text-green-700 font-bold">
            {bus.availableSeats}
          </span>
          Seats Available
        </h1>

        {/* Book Button */}
        <Link
          to={`/ticket-book/${bus.id}`}
          state={bus}
          className="w-full sm:w-fit px-5 py-1.5 bg-primary hover:bg-transparent border-2 
      border-primary hover:border-primary rounded-xl text-sm font-normal 
      text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary 
      ease-in-out duration-300 cursor-pointer"
        >
          Book Seat
        </Link>
      </div>
    </motion.div>
  )
}

export default TicketCard
