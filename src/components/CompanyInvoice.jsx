import { useContext } from "react"
import { FaPhone } from "react-icons/fa6"
import { Context } from "../App"

const CompanyInvoice = () => {
  const { userTravelData } = useContext(Context)

  return (
    <div className="w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative">
      <div className="w-full bg-primary px-4 py-5 rounded-tr-3xl">
        <h1 className="w-full text-2xl text-neutral-50 font-bold text-center">
          Bus Ticket
        </h1>
      </div>
      <div className="w-full px-4 py-7 space-y-1">
        <p className="text-sm text-neutral-600 font-normal">
          Bill No. {userTravelData?.billNumber}
        </p>
        <p className="text-sm text-neutral-600 font-normal">Date: 2024-10-10</p>
        <p className="text-sm text-neutral-600 font-normal">
          Name: {userTravelData?.userName}
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          From: {userTravelData?.routeFrom}{" "}
          <span className="text-xs">({userTravelData?.pickUpStation})</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          To: {userTravelData?.routeTo}{" "}
          <span className="text-xs">({userTravelData?.dropOffStation})</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Departure Time:{" "}
          <span className="text-sm">{userTravelData?.departureTime}</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Arrival Time:{" "}
          <span className="text-sm">{userTravelData?.arrivalTime}</span>
        </p>
        <p className="text-sm flex  text-neutral-600 font-normal">
          Seat No:{" "}
          <span className="font-medium flex pl-2 gap-x-2">
            {userTravelData?.selectedSeats?.map((seatId) => {
              return (
                <li
                  key={seatId}
                  className="w-full h-5 px-1 bg-neutral-200/80 rounded-lg flex items-center justify-center text-sm text-neutral-700 font-semibold"
                >
                  {seatId}
                </li>
              )
            })}
          </span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Passenger: {userTravelData?.selectedSeats?.length}
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Price: Rs.{" "}
          {userTravelData?.selectedSeats?.length * userTravelData?.price}
        </p>
      </div>
      {/* Right Bottom Section */}
      <div className="w-full bg-primary absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5">
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-sm text-neutral-100 font-light">
            +91-{userTravelData?.userNumber}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyInvoice
