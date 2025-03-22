/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { PriceRangeSlider } from "../components/"
import { motion, useInView } from "motion/react"
import { useFilter } from "../hooks/useFilter"
import { INITIAL_MAX_VALUE, INITIAL_MIN_VALUE } from "../reducers/reducer"

const Filter = ({ className }) => {
  const { state, setBusTypeList, setBusCompanyList, setAmenitiesList } =
    useFilter()

  const handleFilter = (e, value) => {
    switch (e.target.name) {
      case "BUS_TYPE":
        return setBusTypeList(value)

      case "BUS_COMPANY":
        return setBusCompanyList(value)

      case "AMENITIES":
        return setAmenitiesList(value)

      default:
        return
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <Reveal>
        <h1 className="text-xl text-neutral-700 font-semibold">
          Apply Filters
        </h1>
      </Reveal>

      {/* Price Filter */}
      <Reveal>
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
          <h1 className="text-lg text-neutral-600 font-medium">Price Range</h1>
          <PriceRangeSlider min={INITIAL_MIN_VALUE} max={INITIAL_MAX_VALUE} />
        </div>
      </Reveal>

      {/* Bus Type Filter */}
      <Reveal>
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
          <h1 className="text-lg text-neutral-600 font-medium">Bus Types</h1>
          <ul className="space-y-2.5">
            {Object.entries(
              state.originalData.reduce((acc, bus) => {
                acc[bus.busType] = (acc[bus.busType] || 0) + 1
                return acc
              }, {})
            )
              .map(([type, count]) => ({ type, count }))
              .map((bus, index) => (
                <li key={index} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="BUS_TYPE"
                    id={bus.type}
                    checked={state.busTypeList.includes(bus.type)}
                    onChange={(e) => handleFilter(e, bus.type)}
                    className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor={bus.type}
                    className="text-sm text-neutral-600 font-normal cursor-pointer"
                  >
                    {bus.type}
                    <span className="text-xs text-neutral-600">
                      {" "}
                      ({bus.count})
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </Reveal>

      {/* Bus Company Filter */}
      <Reveal>
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
          <h1 className="text-lg text-neutral-600 font-medium">
            Bus Companies
          </h1>
          <ul className="space-y-2.5">
            {Object.entries(
              state.originalData.reduce((acc, bus) => {
                acc[bus.busCompany] = (acc[bus.busCompany] || 0) + 1
                return acc
              }, {})
            )
              .map(([company, count]) => ({ company, count }))
              .map((bus, index) => (
                <li key={index} className="w-full flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="BUS_COMPANY"
                    id={bus.company}
                    checked={state.busCompanyList.includes(bus.company)}
                    onChange={(e) => handleFilter(e, bus.company)}
                    className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor={bus.company}
                    className="text-sm text-neutral-600 font-normal cursor-pointer"
                  >
                    {bus.company}
                    <span className="text-xs text-neutral-600">
                      {" "}
                      ({bus.count})
                    </span>
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </Reveal>

      {/* Amenities Filter */}
      <Reveal>
        <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
          <h1 className="text-lg text-neutral-600 font-medium">
            Bus Amenities
          </h1>
          <ul className="space-y-2.5">
            {[
              ...new Set(state.originalData.flatMap((bus) => bus.amenities)),
            ].map((amenity, index) => (
              <li key={index} className="w-full flex items-center gap-2">
                <input
                  type="checkbox"
                  name="AMENITIES"
                  id={amenity}
                  checked={state.amenitiesList.includes(amenity)}
                  onChange={(e) => handleFilter(e, amenity)}
                  className="h-3 w-3 border border-neutral-300 text-neutral-300 cursor-pointer"
                />
                <label
                  htmlFor={amenity}
                  className="text-sm text-neutral-600 font-normal cursor-pointer"
                >
                  {amenity}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}

// Scroll Reveal Wrapper Component
const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Filter
