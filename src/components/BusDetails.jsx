import React from "react"

const BusDetails = ({ bus }) => {
  return (
    <div className="w-full border-t xl:border-t-0 xl:border-l border-neutral-300 pt-5 xl:pt-0 xl:pl-5">
      <div className="w-full space-y-5 text-left">
        <h1 className="text-lg sm:text-xl text-neutral-600 font-medium text-start">
          Bus Details
        </h1>
        {/* <ul className="w-full list-disc list-outside space-y-2.5 px-4"> */}
        <ul className="w-full list-disc list-outside px-4 grid grid-cols-1 min-[820px]:grid-cols-2 min-[1220px]:grid-cols-3 xl:max-2xl:grid-cols-1 2xl:grid-cols-2 gap-y-2.5 gap-x-15">
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Bus Type: {bus.busType}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Bus Number: {bus.busNumber}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Company Name: {bus.busCompany}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Driver Name: {bus.driverName}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Driver Contact: {bus.driverContact}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Driver Experience: {bus.driverExperience}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Luggage Capacity: {bus.luggageCapacity}
          </li>
          {/* <li className="text-sm text-neutral-700 font-normal">
            Wifi Speed: {bus.wifiSpeed}
          </li> */}
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Traffic Condition: {bus.estimatedTrafficCondition}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Insurance: {bus.insuranceCoverage}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Loyalty Points: {bus.loyaltyPoints}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Customer Support: {bus.customerSupportContact[0]}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            GPS Tracking: {bus.gpsTracking}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Eco-Friendly: {bus.ecoFriendly}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Children: {bus.childFriendly}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Senior Citizens: {bus.seniorCitizen}
          </li>
          <li className="text-sm sm:text-base text-neutral-700 font-normal">
            Pets: {bus.petFriendly}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BusDetails
