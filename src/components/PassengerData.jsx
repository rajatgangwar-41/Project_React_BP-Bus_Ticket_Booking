import React from "react"
import { PaymentMethod } from "../components"

const PassengerData = () => {
  return (
    <div className="w-full col-span-4 py-4 space-y-6">
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>
      <div className="space-y-7">
        <div className="w-full space-y-2">
          <label
            htmlFor="fullname"
            className="text-sm text-neutral-500 font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="eg. Rajat"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="eg. rajat@example.com"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="number"
            className="text-sm text-neutral-500 font-medium"
          >
            Phone
          </label>
          <input
            type="number"
            placeholder="eg. +91-9292939291"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
        </div>
        <div className="w-full space-y-2">
          <label
            // htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Pickup Station
          </label>
          <select className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400">
            <option selected disabled>
              Choose Your Nearest Pickup Station
            </option>
            <option value="Kashmiri Gate">Kashmiri Gate</option>
            <option value="Anand Vihar">Anand Vihar</option>
            <option value="Hauj Khas">Hauj Khas</option>
            <option value="Malviya Nagar">Malviya Nagar</option>
          </select>
        </div>
      </div>
      {/* Payment Method */}
      <PaymentMethod />
    </div>
  )
}

export default PassengerData
