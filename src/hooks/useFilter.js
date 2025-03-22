import { useCallback, useContext } from "react"
import { Context } from "../context/context"

const useFilter = () => {
  const { state, dispatch } = useContext(Context)

  const setOriginalData = useCallback(
    (data) => {
      dispatch({ type: "SET_ORIGINAL_DATA", payload: data })
    },
    [dispatch]
  )

  const setFilteredData = useCallback(
    (data) => {
      dispatch({ type: "SET_FILTERED_DATA", payload: data })
    },
    [dispatch]
  )

  const setUserTravelData = useCallback(
    (data) => {
      dispatch({ type: "SET_USER_TRAVEL_DATA", payload: data })
    },
    [dispatch]
  )

  const setSearch = useCallback(
    (data) => {
      dispatch({ type: "SET_SEARCH", payload: data })
    },
    [dispatch]
  )

  const setPriceRange = useCallback(
    (data) => {
      dispatch({ type: "SET_PRICE_RANGE", payload: data })
    },
    [dispatch]
  )

  const setBusTypeList = useCallback(
    (data) => {
      dispatch({ type: "SET_BUS_TYPE_LIST", payload: data })
    },
    [dispatch]
  )

  const setBusCompanyList = useCallback(
    (data) => {
      dispatch({ type: "SET_BUS_COMPANY_LIST", payload: data })
    },
    [dispatch]
  )

  const setAmenitiesList = useCallback(
    (data) => {
      dispatch({ type: "SET_AMENITIES_LIST", payload: data })
    },
    [dispatch]
  )

  const applyFilter = useCallback(() => {
    dispatch({ type: "APPLY_FILTER" })
  }, [dispatch])

  const resetFilters = useCallback(() => {
    dispatch({ type: "RESET" })
  }, [dispatch])

  return {
    state,
    setOriginalData,
    setFilteredData,
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
