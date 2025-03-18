import React from "react"

const ReservationPolicy = () => {
  return (
    <div className="w-full col-span-4 border-l border-neutral-300 pl-5">
      <div className="w-full space-y-3 text-left">
        <h1 className="text-lg text-neutral-600 font-medium text-start">
          Reservation Policy
        </h1>
        <ul className="w-full list-disc list-outside space-y-2.5 px-4">
          <li className="text-sm text-neutral-500 font-normal">
            Please note that this ticket is non-refundable.
          </li>
          <li className="text-sm text-neutral-500 font-normal">
            Passengers must keep their tickets until the journey ends;
            otherwise, they will need to purchase a new one.
          </li>
          <li className="text-sm text-neutral-500 font-normal">
            Tickets can be cancelled 24 hours before the departure time for a
            50% fee.
          </li>
          <li className="text-sm text-neutral-500 font-normal">
            Bus services may be cancelled, rescheduled, or delayed due to
            natural disasters or other unforeseen circumstances.
          </li>
          <li className="text-sm text-neutral-500 font-normal">
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
