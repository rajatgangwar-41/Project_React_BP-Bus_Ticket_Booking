import React, { useContext, useEffect, useState } from "react"
import { GiSteeringWheel } from "react-icons/gi"
import { MdOutlineChair } from "react-icons/md"
import { RiMoneyRupeeCircleLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { ErrorMessage } from "../components"
import { Context } from "../App"

const BusSeat = ({ bus }) => {
  // Track Seat Selection
  // const [selectedSeats, setSelectedSeats] = useState([])
  const { userTravelData, setUserTravelData } = useContext(Context)
  const [showError, setShowError] = useState(false)

  // Handle Seat Selection
  const handleSeatClick = (seatId) => {
    setUserTravelData((prev) => {
      // Ensure prev is not null
      if (!prev) return { selectedSeats: [seatId] }

      const { selectedSeats = [] } = prev

      // If the seat is already selected, remove it
      if (selectedSeats.includes(seatId)) {
        return {
          ...prev,
          selectedSeats: selectedSeats.filter((seat) => seat !== seatId),
        }
      }

      // Check if user has selected more than 10 seats
      if (selectedSeats.length >= 10) {
        setShowError(true)
        return { ...prev } // Keep state unchanged
      }

      // Add new seat selection
      return { ...prev, selectedSeats: [...selectedSeats, seatId] }
    })
  }

  // Hide the error message after 10 seconds
  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [showError])

  console.log(userTravelData)

  // Function to determine seat class based on status
  const getSeatName = (seat) => {
    if (seat.status === "Booked") return "text-primary cursor-not-allowed"
    else if (userTravelData?.selectedSeats?.includes(seat.id))
      return "text-yellow-600 cursor-pointer"
    else return "text-neutral-500 cursor-pointer"
  }

  return (
    <div className="w-full grid grid-cols-5 gap-10">
      {/* Seat Layout */}
      <div className="col-span-3 w-full items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
        <div className="w-full space-y-7">
          <p className="text-base text-neutral-600 font-medium text-center">
            Click on available seats to book your seat.
          </p>
          {/* Seat Layout */}
          <div className="w-full flex items-stretch gap-x-1.5">
            <div className="w-10 h-fit">
              <GiSteeringWheel className="text-3xl mt-7 text-primary -rotate-90" />
            </div>
            {/* Seat Rows */}
            <div className="flex flex-col items-center border-l-2 border-dashed border-neutral-300 pl-7">
              <div className="flex-1 space-y-1">
                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                  {bus?.seats?.slice(0, 9).map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id)}
                      className="flex items-center gap-x-0"
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                  {bus?.seats?.slice(9, 18).map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id)}
                      className="flex items-center gap-x-0"
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto grid grid-cols-10 gap-x-5 justify-end">
                  <div className="col-span-9"></div>
                  {bus?.seats?.slice(18, 19).map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id)}
                      className="flex items-center gap-x-0"
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                  {bus?.seats?.slice(19, 28).map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id)}
                      className="flex items-center gap-x-0"
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                  {bus?.seats?.slice(28, 37).map((seat) => (
                    <div
                      key={seat.id}
                      onClick={() => handleSeatClick(seat.id)}
                      className="flex items-center gap-x-0"
                    >
                      <h6 className="text-base text-neutral-600 font-bold">
                        {seat.id}
                      </h6>
                      <MdOutlineChair
                        className={`text-3xl -rotate-90 ${getSeatName(seat)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Reservation Info */}
          <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-neutral-500 -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium1">Available</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-primary -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium1">Booked</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-yellow-600 -rotate-90" />
              <p className="text-sm text-neutral-500 font-medium1">Selected</p>
            </div>
            <div className="flex items-center gap-x-2">
              <RiMoneyRupeeCircleLine className="text-xl text-neutral-500" />
              <p className="text-sm text-neutral-500 font-medium1">Rs. 1600</p>
            </div>
          </div>
        </div>
      </div>
      {/* Seat Selection Action */}
      <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl px-6 py-4 border border-neutral-200 shadow-sm">
        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Your Destination
            </h1>
            <Link to="/tickets" className="text-sm text-primary font-normal">
              Change Route
            </Link>
          </div>
          <div className="space-y-0.5 w-full">
            <div className="w-full flex items-center justify-between">
              <p className="text-sm text-neutral-400 font-normal">
                From
                {/* <span className="text-xs">
                  ({userTravelData?.boardingPoint})
                </span> */}
              </p>
              <p className="text-sm text-neutral-400 font-normal">
                To
                {/* <span className="text-xs">
                  ({userTravelData?.dropOffPoint})
                </span> */}
              </p>
            </div>
            <div className="w-full flex items-center justify-between gap-x-2">
              <h1 className="text-lg flex flex-col text-neutral-600 font-normal">
                {userTravelData?.routeFrom}
                <span className="font-medium text-sm">
                  ({userTravelData?.departureTime})
                </span>
              </h1>
              <div className="flex-1 border-dashed border border-neutral-300"></div>
              <h1 className="text-lg flex flex-col text-neutral-600 font-normal text-right">
                {userTravelData?.routeTo}
                <span className="font-medium text-sm">
                  ({userTravelData?.arrivalTime})
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-lg text-neutral-600 font-medium">
              Selected Seats
            </h1>
            <div className="bg-primary/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
              Non-Refundable
            </div>
          </div>
          {userTravelData?.selectedSeats?.length > 0 ? (
            <div className="w-full flex items-center gap-x-3">
              {userTravelData?.selectedSeats?.map((seatId) => {
                return (
                  <div
                    key={seatId}
                    className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                  >
                    {seatId}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="w-full flex items-center gap-x-3">
              <p className="text-sm text-neutral-500 font-normal">
                No Seat Selected
              </p>
            </div>
          )}
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-lg text-neutral-600 font-medium">Fair Details</h1>
          <div className="w-full flex items-center justify-between border-l-[1.5px] border-dashed border-neutral-400 pl-2">
            <h3 className="text-sm text-neutral-500 font-medium">Basic Fare</h3>
            <p className="text-sm text-neutral-600 font-medium">
              Rs. {userTravelData?.price}
            </p>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex gap-y-0.5 flex-col">
              <h3 className="text-base text-neutral-500 font-medium">
                Total Price:
              </h3>
              <span className="text-xs text-neutral-500 font-normal">
                (Including All Taxes)
              </span>
            </div>
            {/* Calculate the total price */}
            <p className="text-base text-neutral-600 font-semibold">
              Rs.
              {userTravelData?.selectedSeats?.reduce((total, seatId) => {
                const seat = bus?.seats?.find(
                  (busSeat) => busSeat.id === seatId
                )
                return total + (seat ? bus.price : 0)
              }, 0)}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          {userTravelData?.selectedSeats?.length > 0 ? (
            <Link
              to="/ticket-checkout"
              state={bus}
              className="w-full bg-primary hover:bg-primary/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition"
            >
              Proceed To Checkout
            </Link>
          ) : (
            <div className="w-full space-y-0.5">
              <button className="w-full bg-primary hover:bg-primary/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition cursor-not-allowed">
                Proceed To Checkout
              </button>
              <small className="text-xs flex items-center justify-center pt-2 text-neutral-600 font-normal px-1">
                Please Select at least 1 seat to proceed to checkout
              </small>
            </div>
          )}
        </div>
      </div>
      {/* Show Error Message if more than 10 seats are selected*/}
      {showError && (
        <ErrorMessage message={"You can't select more than 10 seats"} />
      )}
    </div>
  )
}

export default BusSeat
