import React from "react"

const ReservationPolicy = () => {
  return (
    <div className="w-full 2xl:max-w-90 border-t xl:border-t-0 xl:border-l border-neutral-300 pt-5 xl:pt-0 xl:pl-5">
      <div className="w-full space-y-5 text-left">
        <h1 className="text-lg sm:text-xl text-neutral-700 font-medium text-start">
          Reservation Policy
        </h1>
        <ul className="w-full list-disc list-outside space-y-2.5 px-4">
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Please note that this ticket is non-refundable.
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Passengers must keep their tickets until the journey ends;
            otherwise, they will need to purchase a new one.
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Tickets can be cancelled 24 hours before the departure time for a
            50% fee.
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Bus services may be cancelled, rescheduled, or delayed due to
            natural disasters or other unforeseen circumstances.
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Passengers must arrive at the boarding point 30 minutes before the
            departure time. The company is not responsible for missed buses due
            to late arrivals.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReservationPolicy
