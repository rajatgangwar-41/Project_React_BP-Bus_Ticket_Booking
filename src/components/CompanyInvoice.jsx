import { FaPhone } from "react-icons/fa6"
import { useFilter } from "../hooks/useFilter"

const CompanyInvoice = () => {
  const { state } = useFilter()

  return (
    <div className="w-full col-span-4 2xl:col-span-1 border-dashed border-l-2 border-neutral-400 relative">
      <div className="w-full bg-primary px-4 py-5 rounded-tr-3xl">
        <h1 className="w-full text-2xl text-neutral-50 font-bold text-center">
          Bus Ticket
        </h1>
      </div>
      <div className="w-full 2xl:min-h-117 px-4 py-5 space-y-1">
        <p className="text-base text-neutral-600 font-normal">
          Bill No. {state?.userTravelData?.billNumber}
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Date: {state?.userTravelData?.bus?.date}
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Name: {state?.userTravelData?.userName}
        </p>
        <p className="text-v text-neutral-600 font-normal">
          From: {state?.userTravelData?.bus?.routeFrom}{" "}
          <span className="text-xs sm:max-2xl:text-sm">
            ({state?.userTravelData?.pickUpStation})
          </span>
        </p>
        <p className="text-base text-neutral-600 font-normal">
          To: {state?.userTravelData?.bus?.routeTo}{" "}
          <span className="text-xs sm:max-2xl:text-sm">
            ({state?.userTravelData?.dropOffStation})
          </span>
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Departure Time:{" "}
          <span className="text-base">
            {state?.userTravelData?.bus?.departureTime}
          </span>
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Arrival Time:{" "}
          <span className="text-base">
            {state?.userTravelData?.bus?.arrivalTime}
          </span>
        </p>
        <p className="text-base flex flex-col md:flex-row text-neutral-600 font-normal">
          Seat No:{" "}
          <ul className="font-medium flex flex-wrap list-none md:pl-2 gap-x-2">
            {state?.userTravelData?.selectedSeats?.map((seatId) => {
              return (
                <li
                  key={seatId}
                  className="px-2 py-1 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                >
                  {seatId}
                </li>
              )
            })}
          </ul>
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Total Passenger: {state?.userTravelData?.selectedSeats?.length}
        </p>
        <p className="text-base text-neutral-600 font-normal">
          Total Price: Rs.{" "}
          {state?.userTravelData?.discountedPrice ||
            state?.userTravelData?.originalPrice}
        </p>
      </div>
      {/* Right Bottom Section */}
      <div className="w-full bg-primary rounded-br-3xl flex items-center justify-center px-5 py-1.5">
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-base text-neutral-100 font-light">
            +91-{state?.userTravelData?.userNumber}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyInvoice
