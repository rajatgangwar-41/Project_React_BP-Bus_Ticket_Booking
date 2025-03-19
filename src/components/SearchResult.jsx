import { FaBus } from "react-icons/fa6"
import { GrRefresh } from "react-icons/gr"
import { TicketCard } from "../components"
import { busData } from "../constants"
import { useState } from "react"

const SearchResult = () => {
  const [busCount, setBusCount] = useState(5)

  const handleBusCountChange = () => {
    setBusCount(busData.length)
  }

  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <ul className="space-y-6">
        {busData.slice(0, busCount).map((bus, index) => {
          return (
            <li key={index}>
              <TicketCard
                icon={FaBus}
                transportName={bus.transport_name}
                routeFrom={bus.routeFrom}
                routeTo={bus.routeTo}
                arrivalTime={bus.arrival_time}
                departureTime={bus.departure_time}
                price={bus.price}
                availableSeats={bus.available_seats}
                weekDay={bus.weekday}
                rating={bus.rating}
                totalSeats={bus.total_seats}
                amenities={bus.amenities}
              />
            </li>
          )
        })}
      </ul>
      {busCount !== busData.length && (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleBusCountChange}
            className="w-fit px-8 py-3 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
          >
            <GrRefresh />
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchResult
