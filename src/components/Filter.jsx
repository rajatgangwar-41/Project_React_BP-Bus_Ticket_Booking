import React, { useState } from "react"
import { PriceRangeSlider } from "../components/"

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
        <PriceRangeSlider min={1000} max={3000} onChange={handleRangeChange} />
      </div>
      {/* Bus Type Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Types</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="ac"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="ac"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              AC Deluxe <span className="text-xs text-neutral-6001">(10)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="tourist"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="tourist"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Tourist AC Deluxe
              <span className="text-xs text-neutral-6001">(15)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="airSuspension"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="airSuspension"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Air Suspension
              <span className="text-xs text-neutral-6001">(8)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="luxury"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="luxury"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Luxury AC Deluxe
              <span className="text-xs text-neutral-6001">(3)</span>
            </label>
          </div>
        </div>
      </div>
      {/* Bus Company Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Companies</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="random1"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="random1"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Random 1 <span className="text-xs text-neutral-6001">(10)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="random1"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="random1"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Random 2<span className="text-xs text-neutral-6001">(15)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="random3"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="random3"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Random 3<span className="text-xs text-neutral-6001">(8)</span>
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="random4"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="random4"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Random 4<span className="text-xs text-neutral-6001">(3)</span>
            </label>
          </div>
        </div>
      </div>
      {/* Amenities Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-x text-neutral-600 font-medium">Bus Amenities</h1>
        <div className="space-y-2.5">
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="internet"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="internet"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Wifi
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="ac"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="ac"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              AC
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="waterBottles"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="waterBottles"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Water Bottles
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="tv"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="tc"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              LED TV & Music
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="fan"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="fan"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Fan
            </label>
          </div>
          <div className="w-full flex items-center gap-2">
            <input
              type="checkbox"
              id="snacks"
              className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
            />
            <label
              htmlFor="snacks"
              className="text-sm text-neutral-600 font-normal cursor-pointer"
            >
              Snacks
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
