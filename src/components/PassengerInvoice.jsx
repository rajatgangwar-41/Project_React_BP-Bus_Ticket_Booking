import { bus, qrCode } from "../assets"
import { FaCircleCheck, FaPhone } from "react-icons/fa6"
import { IoMdCloseCircle } from "react-icons/io"
import { useFilter } from "../hooks/useFilter"

const PassengerInvoice = () => {
  const { state } = useFilter()

  return (
    <div className="w-full col-span-4 rounded-3xl relative">
      {/* Top Bus Details */}
      <div className="w-full flex flex-col min-[450px]:flex-row items-center justify-between bg-primary px-4 md:px-6 py-3 rounded-tl-3xl">
        <div className="flex flex-col min-[450px]:flex-row justify-center items-center gap-x-3">
          <img
            src={bus}
            alt="Bus Image"
            className="w-auto h-10 md:h-12 object-cover object-center"
          />
          <h1 className="text-lg md:text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
            {state?.userTravelData?.bus?.busCompany}
          </h1>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-lg md:text-xl text-neutral-50 font-bold">
            <span className="text-base md:text-lg">(Bus No.)</span>{" "}
            {state?.userTravelData?.bus?.busNumber}
          </p>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="w-full mx-auto px-4 md:px-5 py-6 mb-5">
        <div className="col-span-4 space-y-4">
          {/* Bill No, Price & Date */}
          <div className="w-full flex flex-wrap items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
            <p className="text-base md:text-lg text-neutral-500 font-normal">
              Bill No. {state?.userTravelData?.billNumber}
            </p>
            <p className="text-base md:text-lg text-neutral-500 font-normal">
              Rs.{" "}
              {(state?.userTravelData?.discountedPrice !== undefined &&
                ((100 - state?.userTravelData?.discountInPercent) *
                  state?.userTravelData?.bus?.price) /
                  100) ||
                state?.userTravelData?.bus?.price}
              <span className="text-sm">/seat</span>
            </p>
            <p className="text-base md:text-lg text-neutral-500 font-normal">
              Date: {state?.userTravelData?.bus?.date}
            </p>
          </div>

          {/* Passenger Details */}
          <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
            <div className="space-y-2">
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                Name:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.userName}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                From:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.bus?.routeFrom}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                To:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.bus?.routeTo}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal flex flex-col items-start gap-y-2">
                Total Seats Booked:
                <span className="font-medium min-[1150px]:max-xl:max-w-90 list-none flex flex-wrap gap-2">
                  {state?.userTravelData?.selectedSeats?.map((seatId) => (
                    <li
                      key={seatId}
                      className="px-2 py-1 bg-neutral-200/80 rounded-lg text-base text-neutral-700 font-semibold"
                    >
                      {seatId}
                    </li>
                  ))}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                Total Passengers:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.selectedSeats?.length}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                Pickup Station:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.pickUpStation}
                </span>
              </p>
              <p className="text-base md:text-lg text-neutral-500 font-normal">
                Drop Station:{" "}
                <span className="font-medium">
                  {state?.userTravelData?.dropOffStation}
                </span>
              </p>
            </div>

            {/* Payment Details */}
            <div className="flex items-center justify-center gap-12 pr-10">
              <div className="min-[1150px]:flex flex-col hidden items-center justify-center space-y-4">
                <div className="space-y-1 text-center">
                  <p className="text-xl text-neutral-500 font-normal">
                    Total Price:
                  </p>
                  <h1 className="text-xl text-neutral-600 font-bold">
                    Rs.{" "}
                    {state?.userTravelData?.discountedPrice ||
                      state?.userTravelData?.originalPrice}
                  </h1>
                </div>
                <div className="w-fit px-5 py-1 border rounded-full bg-green-500/5 flex items-center justify-center gap-2 border-green-600 text-green-600 text-xl font-medium">
                  <FaCircleCheck size={20} />
                  <span>Bill Paid</span>
                </div>
              </div>
              {/* QR Code Section */}
              <div className="w-52 mx-auto hidden col-span-1 min-[1150px]:flex items-center justify-start border border-neutral-200 rounded-xl shadow-sm p-2">
                <img
                  src={qrCode}
                  alt="QR Code"
                  className="w-52 aspect-square object-cover object-center rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3 gap-3">
            <p className="text-base md:text-lg text-neutral-600 font-normal">
              {state?.userTravelData?.bus?.routeFrom}{" "}
              <span className="text-neutral-400 px-2"> ------&gt;</span>
              {state?.userTravelData?.bus?.routeTo}
            </p>
            <p className="text-base md:text-lg text-neutral-600 font-normal">
              Departure Time:{" "}
              <span className="font-medium">
                {state?.userTravelData?.bus?.departureTime}
              </span>
            </p>
            <p className="text-base md:text-lg text-neutral-600 font-normal">
              Arrival Time:{" "}
              <span className="font-medium">
                {state?.userTravelData?.bus?.arrivalTime}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full mt-7 flex flex-col min-[500px]:flex-row min-[1150px]:hidden items-center justify-between gap-y-5 px-5">
          {/* Payment Details */}
          <div className="w-full flex flex-col min-[1150px]:hidden items-center space-y-4">
            <div className="space-y-1 text-center">
              <p className="text-lg sm:text-2xl text-neutral-500 font-normal">
                Total Price:
              </p>
              <h1 className="text-lg sm:text-2xl text-neutral-600 font-bold">
                Rs.{" "}
                {state?.userTravelData?.discountedPrice ||
                  state?.userTravelData?.originalPrice}
              </h1>
            </div>
            <div className="w-full max-w-40 py-1 border rounded-full bg-green-500/5 flex items-center justify-center gap-2 border-green-600 text-green-600 text-lg sm:text-xl font-medium">
              <FaCircleCheck size={16} />
              <span>Bill Paid</span>
            </div>
          </div>
          {/* QR Code Section */}
          <div className="w-full max-w-50 flex col-span-1 min-[1150px]:hidden items-center justify-center md:justify-start border border-neutral-200 rounded-xl shadow-sm p-2">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-40 md:w-50 aspect-square object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-primary rounded-bl-3xl flex flex-col lg:flex-row items-center justify-between px-4 md:px-5 py-2 gap-2">
        <p className="text-sm text-neutral-100 font-light text-center lg:text-left lg:max-xl:max-w-110">
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
