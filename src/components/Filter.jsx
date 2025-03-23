/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { PriceRangeSlider } from "../components/"
import { motion, useInView } from "framer-motion"
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
    <div
      className={`w-full sm:w-8/10 xl:w-full mx-auto space-y-6 ${className}`}
    >
      <Reveal>
        <h1 className="text-lg sm:text-xl text-center xl:text-start text-neutral-700 font-semibold">
          Apply Filters
        </h1>
      </Reveal>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4 ">
        {/* Price Filter */}
        <Reveal>
          <div className="w-full h-full border border-neutral-300 rounded-xl p-4 space-y-1">
            <h1 className="text-lg text-neutral-600 font-medium">
              Price Range
            </h1>
            <PriceRangeSlider min={INITIAL_MIN_VALUE} max={INITIAL_MAX_VALUE} />
          </div>
        </Reveal>

        {/* Bus Type Filter */}
        <Reveal>
          <div className="w-full h-auto border border-neutral-300 rounded-xl p-4 space-y-3">
            <h1 className="text-lg md:text-base text-neutral-600 font-medium">
              Bus Types
            </h1>
            <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 space-y-2.5">
              {Object.entries(
                state.originalData.reduce((acc, bus) => {
                  acc[bus.busType] = (acc[bus.busType] || 0) + 1
                  return acc
                }, {})
              )
                .map(([type, count]) => ({ type, count }))
                .map((bus, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="BUS_TYPE"
                      id={bus.type}
                      checked={state.busTypeList.includes(bus.type)}
                      onChange={(e) => handleFilter(e, bus.type)}
                      className="h-4 w-4 border border-neutral-300 cursor-pointer"
                    />
                    <label
                      htmlFor={bus.type}
                      className="text-base text-neutral-600 font-normal cursor-pointer"
                    >
                      {bus.type}{" "}
                      <span className="text-sm text-neutral-500">
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
          <div className="w-full h-full border border-neutral-300 rounded-xl p-4 space-y-3">
            <h1 className="text-lg md:text-base text-neutral-600 font-medium">
              Bus Companies
            </h1>
            <ul className="grid grid-cols-1 min-[450px]:grid-cols-2 min-[640px]:grid-cols-1 min-[1200px]:grid-cols-2 xl:grid-cols-1 space-y-2.5">
              {Object.entries(
                state.originalData.reduce((acc, bus) => {
                  acc[bus.busCompany] = (acc[bus.busCompany] || 0) + 1
                  return acc
                }, {})
              )
                .map(([company, count]) => ({ company, count }))
                .map((bus, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="BUS_COMPANY"
                      id={bus.company}
                      checked={state.busCompanyList.includes(bus.company)}
                      onChange={(e) => handleFilter(e, bus.company)}
                      className="h-4 w-4 border border-neutral-300 cursor-pointer"
                    />
                    <label
                      htmlFor={bus.company}
                      className="text-base text-neutral-600 font-normal cursor-pointer"
                    >
                      {bus.company}{" "}
                      <span className="text-sm text-neutral-500">
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
          <div className="w-full h-full border border-neutral-300 rounded-xl p-4 space-y-3">
            <h1 className="text-lg md:text-base text-neutral-600 font-medium">
              Bus Amenities
            </h1>
            <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 space-y-2.5">
              {[
                ...new Set(state.originalData.flatMap((bus) => bus.amenities)),
              ].map((amenity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="AMENITIES"
                    id={amenity}
                    checked={state.amenitiesList.includes(amenity)}
                    onChange={(e) => handleFilter(e, amenity)}
                    className="h-4 w-4 border border-neutral-300 cursor-pointer"
                  />
                  <label
                    htmlFor={amenity}
                    className="text-base text-neutral-600 font-normal cursor-pointer"
                  >
                    {amenity}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

// Scroll Reveal Wrapper Component
const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
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
