import { bus, qrCode } from "../assets"
import { FaCircleCheck, FaPhone } from "react-icons/fa6"
import { IoMdCloseCircle } from "react-icons/io"
import { useFilter } from "../hooks/useFilter"

const PassengerInvoice = () => {
  const { state } = useFilter()

  return (
    <div className="w-full col-span-4 rounded-3xl relative">
      {/* Top Bus Details */}
      <div className="w-full flex items-center justify-between bg-primary px-6 py-3 rounded-tl-3xl">
        <div className="flex items-center gap-x-3">
          <img
            src={bus}
            alt="Bus Image"
            className="w-auto h-12 object-cover object-center"
          />
          <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
            {state?.userTravelData?.bus?.busCompany}
          </h1>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-xl text-neutral-50 font-bold">
            <span className="text-lg">(Bus No.)</span>{" "}
            {state?.userTravelData?.bus?.busNumber}
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-6 mb-5">
        <div className="col-span-4 space-y-3.5">
          {/* Bill No, per sea and date */}
          <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
            <p className="text-base text-neutral-500 font-normal">
              Bill No. {state?.userTravelData?.billNumber}
            </p>
            <p className="text-base text-neutral-500 font-normal">
              Rs.{" "}
              {(state?.userTravelData?.discountedPrice !== undefined &&
                ((100 - state?.userTravelData?.discountInPercent) *
                  state?.userTravelData?.bus?.price) /
                  100) ||
                state?.userTravelData?.bus?.price}
              <span className="text-xs">/seat</span>
            </p>
            <p className="text-base text-neutral-500 font-normal">
              Date: {state?.userTravelData?.bus?.date}
            </p>
          </div>
          {/* Passenger Detail */}
          <div className="w-full flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-base text-neutral-500 font-normal">
                Name:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.userName}
                </span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                From:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.bus?.routeFrom}
                </span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                To:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.bus?.routeTo}
                </span>
              </p>
              <p className="w-full flex text-base text-neutral-500 font-normal">
                Total Seats Booked:
                <span className="font-medium flex pl-2 gap-x-2">
                  {state?.userTravelData?.selectedSeats?.map((seatId) => {
                    return (
                      <li
                        key={seatId}
                        className="w-full h-7 px-2 bg-neutral-200/80 rounded-lg flex items-center justify-center text-sm text-neutral-700 font-semibold"
                      >
                        {seatId}
                      </li>
                    )
                  })}
                </span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Total Passengers:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.selectedSeats?.length}
                </span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Pickup Station:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.pickUpStation}
                </span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Drop Station:
                <span className="font-medium">
                  {" "}
                  {state?.userTravelData?.dropOffStation}
                </span>
              </p>
            </div>
            <div className="space-y-4 flex items-center justify-center flex-col">
              <div className="space-y-1.5 text-center">
                <p className="text-base text-neutral-500 font-normal">
                  Total Price:
                </p>
                <h1 className="text-xl text-neutral-600 font-bold">
                  Rs.{" "}
                  {state?.userTravelData?.discountedPrice ||
                    state?.userTravelData?.originalPrice}
                </h1>
              </div>
              <div className="w-fit px-3 py-1 border rounded-full bg-green-500/5 flex items-center justify-center gap-2 border-green-600 text-green-600 text-sm font-medium ">
                <FaCircleCheck size={16} />
                <span>Bill Paid</span>
              </div>
              {/* <div className="w-fit px-3 py-1 border rounded-full bg-primary/5 flex items-center justify-center gap-2 border-primary text-primary text-sm font-medium ">
                <IoMdCloseCircle size={16} />
                <span>Pending</span>
              </div> */}
            </div>
          </div>
          {/* Route Detail */}
          <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
            <p className="text-base text-neutral-600 font-normal">
              {state?.userTravelData?.bus?.routeFrom}{" "}
              <span className="text-neutral-400 px-2"> ------&gt;</span>
              {state?.userTravelData?.bus?.routeTo}
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Departure Time:{" "}
              <span className="font-medium">
                {state?.userTravelData?.bus?.departureTime}
              </span>
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Arrival Time:{" "}
              <span className="font-medium">
                {state?.userTravelData?.bus?.arrivalTime}
              </span>
            </p>
          </div>
        </div>
        <div className="col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-full aspect-square object-cover object-center rounded-xl"
          />
        </div>
      </div>
      {/* Left Bottom Section */}
      <div className="w-full bg-primary absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5">
        <p className="text-xs text-neutral-100 font-light">
          Note: 40% charge for cancellation price 24 Hours before the departure
          of the bus.
        </p>
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-sm text-neutral-100 font-light">
            {state?.userTravelData?.bus?.customerSupportContact[0]},
          </p>
          <p className="text-sm text-neutral-100 font-light">
            {state?.userTravelData?.bus?.customerSupportContact[1]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PassengerInvoice
