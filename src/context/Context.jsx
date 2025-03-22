import { useEffect, useReducer } from "react"
import { Context } from "./context"
import { filterReducer, initialState } from "../reducers/reducer"
import { busData } from "../constants"

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    ...initialState,
    originalData: busData,
    filteredData: busData,
  })

  useEffect(() => {
    dispatch({ type: "SET_ORIGINAL_DATA", payload: busData })
  }, [])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export { ContextProvider }
