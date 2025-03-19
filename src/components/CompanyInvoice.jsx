import React from "react"
import { FaPhone } from "react-icons/fa6"

const CompanyInvoice = () => {
  return (
    <div className="w-full col-span-1 border-dashed border-l-2 border-neutral-400 relative">
      <div className="w-full bg-primary px-4 py-5 rounded-tr-3xl">
        <h1 className="w-full text-2xl text-neutral-50 font-bold text-center">
          Bus Ticket
        </h1>
      </div>
      <div className="w-full px-4 py-7 space-y-1">
        <p className="text-sm text-neutral-600 font-normal">Bill No. 123</p>
        <p className="text-sm text-neutral-600 font-normal">Date: 2024-10-10</p>
        <p className="text-sm text-neutral-600 font-normal">
          Name: Rajat Gangwar
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          From: Delhi <span className="text-xs">(Bus Park)</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          To: Kichha <span className="text-xs">(New Gate)</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Departure Time: <span className="text-sm">06:15 AM</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Arrival Time: <span className="text-sm">11:15 AM</span>
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Seat No.:A1, A2, A3, A4
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Passenger: 04 Only
        </p>
        <p className="text-sm text-neutral-600 font-normal">
          Total Price: Rs. 1600
        </p>
      </div>
      {/* Right Bottom Section */}
      <div className="w-full bg-primary absolute bottom-0 right-0 rounded-br-3xl flex items-center justify-center px-5 py-1.5">
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-sm text-neutral-100 font-light">+91-9873702765</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyInvoice
