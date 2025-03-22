import { useContext } from "react"
import { Context } from "../context/context"

const useFilter = () => {
  const { state, dispatch } = useContext(Context)

  const setOriginalData = (data) => {
    dispatch({ type: "SET_ORIGINAL_DATA", payload: data })
  }

  const setUserTravelData = (data) => {
    dispatch({ type: "SET_USER_TRAVEL_DATA", payload: data })
  }

  const setSearch = (data) => {
    dispatch({ type: "SET_SEARCH", payload: data })
  }

  const setPriceRange = (data) => {
    dispatch({ type: "SET_PRICE_RANGE", payload: data })
  }

  const setBusTypeList = (data) => {
    dispatch({ type: "SET_BUS_TYPE_LIST", payload: data })
  }

  const setBusCompanyList = (data) => {
    dispatch({ type: "SET_BUS_COMPANY_LIST", payload: data })
  }

  const setAmenitiesList = (data) => {
    dispatch({ type: "SET_AMENITIES_LIST", payload: data })
  }

  const applyFilter = () => {
    dispatch({ type: "APPLY_FILTER" })
  }

  const resetFilters = () => {
    dispatch({ type: "RESET" })
  }

  return {
    state,
    setOriginalData,
    setUserTravelData,
    setSearch,
    setPriceRange,
    setBusTypeList,
    setBusCompanyList,
    setAmenitiesList,
    applyFilter,
    resetFilters,
  }
}

export { useFilter }
