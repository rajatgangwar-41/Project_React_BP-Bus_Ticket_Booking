import React from "react"

const BusDetails = ({ bus }) => {
  return (
    <div className="w-full col-span-4 border-l border-neutral-300 pl-5">
      <div className="w-full space-y-3 text-left">
        <h1 className="text-lg text-neutral-600 font-medium text-start">
          Bus Details
        </h1>
        {/* <ul className="w-full list-disc list-outside space-y-2.5 px-4"> */}
        <ul className="w-full list-disc list-outside px-4 grid grid-cols-2 grid-rows-7 gap-y-2.5 gap-x-15">
          <li className="text-sm text-neutral-600 font-normal">
            Bus Type: {bus.busType}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Bus Number: {bus.busNumber}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Transport Name: {bus.transportName}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Driver Name: {bus.driverName}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Driver Contact: {bus.driverContact}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Driver Experience: {bus.driverExperience}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Luggage Capacity: {bus.luggageCapacity}
          </li>
          {/* <li className="text-sm text-neutral-600 font-normal">
            Wifi Speed: {bus.wifiSpeed}
          </li> */}
          <li className="text-sm text-neutral-600 font-normal">
            Traffic Condition: {bus.estimatedTrafficCondition}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Insurance: {bus.insuranceCoverage}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Loyalty Points: {bus.loyaltyPoints}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Customer Support: {bus.customerSupportContact[0]}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            GPS Tracking: {bus.gpsTracking}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Eco-Friendly: {bus.ecoFriendly}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Children: {bus.childFriendly}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Senior Citizens: {bus.seniorCitizen}
          </li>
          <li className="text-sm text-neutral-600 font-normal">
            Pets: {bus.petFriendly}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BusDetails
