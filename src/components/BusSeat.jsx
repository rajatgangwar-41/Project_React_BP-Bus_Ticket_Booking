import React, { useEffect, useState } from "react"
import { GiSteeringWheel } from "react-icons/gi"
import busSeatData from "../constants/busSeatData"
import { MdOutlineChair } from "react-icons/md"
import { RiMoneyRupeeCircleLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { ErrorMessage } from "../components"

const BusSeat = () => {
  // Track Seat Selection
  const [selectedSeats, setSelectedSeats] = useState([])
  const [showError, setShowError] = useState(false)

  // Handle Seat Selection
  const handleSeatClick = (seatId) => {
    // If the seat is already booked, ignore the click or disable it
    const selectedSeat = busSeatData.find((seat) => seat.id === seatId)
    if (selectedSeat.status === "booked") return

    // If the seat is available, select it
    setSelectedSeats((prevSelectedSeats) => {
      // check if the seat is already selected
      if (prevSelectedSeats.includes(seatId))
        return prevSelectedSeats.filter((seat) => seat !== seatId)
      // check if the user has selected more than 10 seats
      else if (prevSelectedSeats.length >= 10) {
        setShowError(true)
        return prevSelectedSeats
      } else return [...prevSelectedSeats, seatId]
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

  // Function to determine seat class based on status
  const getSeatName = (seat) => {
    if (seat.status === "booked") return "text-primary cursor-not-allowed"
    else if (selectedSeats.includes(seat.id))
      return "text-yellow-600 cursor-pointer"
    else return "text-neutral-500 cursor-pointer"
  }

  return (
    <div className="w-full grid grid-cols-5 gap-10">
      {/* Seat Layout */}
      <div className="col-span-3 w-full items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
        <div className="w-full space-y-7">
          <p className="text-base text-neutral-600 font-medium text-center">
            Click on available seats to reserve your seat.
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
                  {busSeatData.slice(0, 9).map((seat) => (
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
                  {" "}
                  {busSeatData.slice(9, 18).map((seat) => (
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
                  {busSeatData.slice(18, 19).map((seat) => (
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
                  {" "}
                  {busSeatData.slice(19, 28).map((seat) => (
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
                  {" "}
                  {busSeatData.slice(28, 37).map((seat) => (
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
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-sm text-neutral-400 font-normal">
                From <span className="text-xs">(Kashmiri gate)</span>
              </p>
              <p className="text-sm text-neutral-400 font-normal">
                To <span className="text-xs">(kichha)</span>
              </p>
            </div>
            <div className="w-full flex items-center justify-between gap-x-4 ">
              <h1 className="text-sm text-neutral-600 font-normal">
                Delhi <span className="font-medium">(08:00 am)</span>
              </h1>
              <div className="flex-1 border-dashed border border-neutral-300"></div>
              <h1 className="text-sm text-neutral-600 font-normal">
                Kichha <span className="font-medium">(12:00 pm)</span>
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
              {" "}
              Non-Refundable
            </div>
          </div>
          {selectedSeats.length > 0 ? (
            <div className="w-full flex items-center gap-x-3">
              {selectedSeats.map((seatId) => {
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
            <p className="text-sm text-neutral-600 font-medium">Rs. 1600</p>
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
              {selectedSeats.reduce((total, seatId) => {
                const seat = busSeatData.find(
                  (busSeat) => busSeat.id === seatId
                )
                return total + (seat ? seat.price : 0)
              }, 0)}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          {selectedSeats.length > 0 ? (
            <Link
              to="/tickets/checkout"
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
