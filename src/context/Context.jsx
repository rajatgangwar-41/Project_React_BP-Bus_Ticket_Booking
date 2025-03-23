import { useCallback, useEffect, useReducer } from "react"
import { Context } from "./context"
import { filterReducer, initialState } from "../reducers/reducer"
import { busData } from "../constants"
import { debounce } from "lodash"
import {
  filterByAmenities,
  filterByBusCompany,
  filterByBusType,
  filterByPrice,
  filterBySearch,
} from "../utils/filterFunctions"

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    originalData: busData,
    filteredData: busData,
  })

  const debouncedFilterByPrice = useCallback(
    debounce(() => {
      let updatedData = state.originalData
      updatedData = filterBySearch(updatedData, state.search)
      updatedData = filterByBusType(updatedData, state.busTypeList)
      updatedData = filterByBusCompany(updatedData, state.busCompanyList)
      updatedData = filterByAmenities(updatedData, state.amenitiesList)
      updatedData = filterByPrice(updatedData, state.priceRange)

      dispatch({ type: "SET_FILTERED_DATA", payload: [...updatedData] }) // Dispatch debounced result
    }, 300),
    [
      state.originalData,
      state.search,
      state.busTypeList,
      state.busCompanyList,
      state.amenitiesList,
      state.priceRange,
      dispatch,
    ]
  )

  useEffect(() => {
    dispatch({ type: "APPLY_FILTER" })
  }, [
    state.originalData,
    state.busTypeList,
    state.busCompanyList,
    state.amenitiesList,
  ])

  useEffect(() => {
    debouncedFilterByPrice(state.originalData, state.priceRange)
  }, [
    state.originalData,
    state.search,
    state.priceRange,
    debouncedFilterByPrice,
  ])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { ContextProvider }
