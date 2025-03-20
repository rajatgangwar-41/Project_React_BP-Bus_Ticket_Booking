/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { FaBus, FaCalendarWeek, FaStar, FaWifi } from "react-icons/fa6"
import { MdOutlineChair } from "react-icons/md"
import { RiVipFill } from "react-icons/ri"
import { TbAirConditioning } from "react-icons/tb"
import { Link } from "react-router-dom"
import { Context } from "../App"

const TicketCard = ({ icon: Icon, bus }) => {
  const { setUserTravelData } = useContext(Context)

  return (
    <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4">
      <div className="space-y-5 w-full border-b border-neutral-300/60 pb-5">
        {/* Routes */}
        <div className="space-y-5">
          {/* Bus Info  */}
          <div className="w-full  flex items-center justify-between">
            <div className="min-w-65 flex items-center gap-x-2">
              <FaBus className="h-5 w-5 text-primary" />
              <p className="text-lg text-neutral-700 font-semibold">
                {bus.transportName}
              </p>
            </div>
            <div className="flex items-center gap-x-3 w-fit rounded-full px-1.5 py-0.5">
              <FaCalendarWeek className="w-4 h-4 text-primary bg-neutral-200/65" />
              <ul className="flex gap-2">
                {bus.weekDay.map((day, index) => {
                  return (
                    <p
                      key={index}
                      className="text-sm bg-neutral-200/65 text-neutral-600 font-normal px-2 py-0.5 rounded-full"
                    >
                      {day}
                    </p>
                  )
                })}
              </ul>
            </div>
            <div className="flex items-center gap-x-4">
              {bus.amenities.some((a) =>
                a.toLowerCase().includes("air conditioning")
              ) && (
                <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                  <TbAirConditioning className="w-4 h-4 text-primary" />
                  <p className="text-xs text-neutral-600 font-normal">AC</p>
                </div>
              )}
              {bus.amenities.some((a) => a.toLowerCase().includes("wifi")) && (
                <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                  <FaWifi className="w-4 h-4 text-primary" />
                  <p className="text-xs text-neutral-600 font-normal">Wifi</p>
                </div>
              )}
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                <FaStar className="w-4 h-4 text-yellow-600" />
                <p className="text-xs text-yellow-600 font-normal pt-0.5">
                  {bus.rating}
                </p>
              </div>
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                <RiVipFill className="w-4 h-4 text-primary" />
                <p className="text-xs text-neutral-600 font-normal">sofa</p>
              </div>
              <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                <MdOutlineChair className="w-4 h-4 text-primary -rotate-90" />
                <p className="text-xs text-neutral-600 font-normal">
                  {bus.totalSeats} Seats
                </p>
              </div>
            </div>
          </div>
          {/* Route */}
          <div className="space-y-0.5">
            <div className="w-full flex items-center justify-between gap-x-2.5">
              <h1 className="text-2xl text-neutral-600 font-semibold">
                {bus.arrivalTime}
              </h1>
              <div className="flex-1 border-dashed border border-neutral-300 relative">
                <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </p>
              </div>
              <h1 className="text-2xl text-neutral-600 font-semibold">
                {bus.departureTime}
              </h1>
            </div>
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-base text-neutral-500 font-normal">
                {bus.routeFrom}
              </p>
              <p className="text-base text-neutral-500 font-normal">
                {bus.routeTo}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Price, Available Seats and Reserve Button */}
      <div className="w-full flex items-center justify-between">
        {/* Price */}
        <h1 className="text-xl text-neutral-700 font-semibold">
          Rs. {bus.price}
          <span className="text-sm text-neutral-500 font-normal">
            /per seat
          </span>
        </h1>

        <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
          <span className="text-lg text-green-700 font-bold pt-0">
            {bus.availableSeats}
          </span>
          Seats Available
        </h1>

        <Link
          to="/ticket-book"
          state={bus}
          onClick={() => setUserTravelData(bus)}
          className="w-fit px-5 py-1.5 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
        >
          Book Seat
        </Link>
      </div>
    </div>
  )
}

export default TicketCard
