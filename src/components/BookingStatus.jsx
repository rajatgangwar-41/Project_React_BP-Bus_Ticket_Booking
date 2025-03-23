import { useFormContext } from "react-hook-form"
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate, useParams } from "react-router-dom"
import { ApplyCoupon } from "../components/"
import { useFilter } from "../hooks/useFilter"

const BookingStatus = () => {
  const { handleSubmit } = useFormContext()
  const { state, setUserTravelData } = useFilter()
  const { ticketId } = useParams()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    alert("Booking Successful!")
    setUserTravelData({
      userName: data.fullName,
      userEmail: data.email,
      userNumber: data.phone,
      pickUpStation: data.pickupStation,
      dropOffStation: data.dropOffStation,
      billNumber: Math.floor(1000 + Math.random() * 9000),
      ticketId,
    })
    navigate(`/ticket-invoice/${ticketId}`)
  }

  return (
    <div className="w-full col-span-3 sticky top-20 space-y-7">
      <div className="w-full bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm space-y-5">
        <h1 className="text-lg text-neutral-700 font-bold text-center border-b border-neutral-200 pb-4">
          Your Ticket Status
        </h1>
        <div className="space-y-5">
          <div className="space-y-2 w-full">
            <h1 className="text-base text-neutral-700 font-medium">
              Your Destination
            </h1>
            <div className="space-y-0.5 w-full">
              <div className="w-full flex items-center justify-between gap-x-5">
                <p className="text-sm text-neutral-400 font-normal">
                  From
                  {/* <span className="text-xs">({bus.boardingPoint})</span> */}
                </p>
                <p className="text-sm text-neutral-400 font-normal">
                  To
                  {/* <span className="text-xs">({bus.dropOffPoint})</span> */}
                </p>
              </div>
              <div className="w-full flex items-center justify-between gap-x-4 ">
                <h1 className="text-sm text-neutral-600 font-normal">
                  {state?.userTravelData?.bus?.routeFrom}
                  {"s "}
                  <span className="font-medium">
                    ({state?.userTravelData?.bus?.departureTime})
                  </span>
                </h1>
                <div className="flex-1 border-dashed border border-neutral-300"></div>
                <h1 className="text-sm text-neutral-600 font-normal">
                  {state?.userTravelData?.bus?.routeTo}{" "}
                  <span className="font-medium">
                    ({state?.userTravelData?.bus?.arrivalTime})
                  </span>
                </h1>
              </div>
              <div className="w-full flex items-center justify-between gap-x-4 !mt-1.5">
                <h1 className="text-sm text-neutral-600 font-normal">
                  Bus No:
                </h1>
                <h1 className="text-sm text-neutral-700 font-medium">
                  ({state?.userTravelData?.bus?.busNumber})
                </h1>
              </div>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-base text-neutral-700 font-medium">
              Your Seats
            </h1>
            <ul className="w-full flex flex-wrap justify-start items-center gap-x-3">
              {state?.userTravelData?.selectedSeats?.map((seatId) => {
                return (
                  <li
                    key={seatId}
                    className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold"
                  >
                    {seatId}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="space-y-3 flex flex-col sm:flex-row lg:flex-col xl:max-2xl:flex-row items-start justify-between">
            <h1 className="w-full text-base text-neutral-700 font-medium">
              Have a Discount Coupon?
            </h1>
            <ApplyCoupon />
          </div>
          <div className="w-full">
            <div className="w-full">
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex gap-y-0.5 flex-col">
                  <h3 className="text-base text-neutral-600 font-medium">
                    Original Price:
                  </h3>
                </div>
                {/* Calculate the total price */}
                <p className="text-base text-neutral-600 font-semibold">
                  {state?.userTravelData?.originalPrice}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex gap-y-0.5 flex-col">
                  <h3 className="text-base text-neutral-600 font-medium">
                    Discount:{" "}
                    <span className="text-base">
                      {state?.userTravelData?.discountInPercent !== undefined &&
                        state?.userTravelData?.discountInPercent + "%"}
                    </span>
                  </h3>
                </div>
                {/* Calculate the total price */}
                <p className="text-base text-neutral-600 font-semibold">
                  - {state?.userTravelData?.discountInRupees || 0}
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex gap-y-0.5 flex-col">
                  <h3 className="text-base text-neutral-600 font-medium">
                    Total Price:
                  </h3>
                  <span className="text-xs text-neutral-500 font-normal">
                    (Including All Taxes)
                  </span>
                </div>
                {/* Calculate the total price */}
                <p className="text-base text-neutral-600 font-semibold">
                  Rs.{" "}
                  {state?.userTravelData?.discountedPrice ||
                    state?.userTravelData?.originalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-1.5">
        <button
          onClick={async () => await handleSubmit(onSubmit)()}
          className="w-full bg-primary hover:bg-primary/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center gap-x-1.5 uppercase rounded-lg transition cursor-pointer"
        >
          Proceed To Pay
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  )
}

export default BookingStatus
