import React, { useState } from "react"
import { PriceRangeSlider } from "../components/"
import { busData } from "../constants"

const Filter = ({ className }) => {
  const [_, setRangeValues] = useState({ min: 0, max: 100 })

  const handleRangeChange = (values) => {
    setRangeValues({ values })
  }

  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-x text-neutral-700 font-semibold">Apply Filters</h1>
      {/* Price Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-x text-neutral-600 font-medium">Apply Filters</h1>
        <PriceRangeSlider min={500} max={2000} onChange={handleRangeChange} />
      </div>
      {/* Bus Type Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Types</h1>
        <ul className="space-y-2.5">
          {Object.entries(
            busData.reduce((acc, bus) => {
              acc[bus.busType] = (acc[bus.busType] || 0) + 1
              return acc
            }, {})
          )
            .map(([type, count]) => ({ type, count }))
            .map((bus, index) => {
              return (
                <li key={index} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={bus.type}
                    className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor="ac"
                    className="text-sm text-neutral-600 font-normal cursor-pointer"
                  >
                    {bus.type}
                    <span className="text-xs text-neutral-6001">
                      ({bus.count})
                    </span>
                  </label>
                </li>
              )
            })}
        </ul>
      </div>
      {/* Bus Company Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Companies</h1>
        <ul className="space-y-2.5">
          {Object.entries(
            busData.reduce((acc, bus) => {
              acc[bus.transportName] = (acc[bus.transportName] || 0) + 1
              return acc
            }, {})
          )
            .map(([company, count]) => ({ company, count }))
            .map((bus, index) => {
              return (
                <li key={index} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={bus.company}
                    className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor={bus.company}
                    className="text-sm text-neutral-600 font-normal cursor-pointer"
                  >
                    {bus.company}
                    <span className="text-xs text-neutral-6001">
                      ({bus.count})
                    </span>
                  </label>
                </li>
              )
            })}
        </ul>
      </div>
      {/* Amenities Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Amenities</h1>
        <ul className="space-y-2.5">
          {[...new Set(busData.flatMap((bus) => bus.amenities))].map(
            (amenity, index) => {
              return (
                <li key={index} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={amenity}
                    className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor={amenity}
                    className="text-sm text-neutral-600 font-normal cursor-pointer"
                  >
                    {amenity}
                  </label>
                </li>
              )
            }
          )}
        </ul>
      </div>
    </div>
  )
}

export default Filter
