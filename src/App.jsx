import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
import { createContext, useMemo, useState } from "react"
import { busData } from "./constants"

export const Context = createContext()

const App = () => {
  const [userTravelData, setUserTravelData] = useState(null)
  const [search, setSearch] = useState({
    routeFrom: "",
    routeTo: "",
    date: "",
  })
  const [filteredData, setFilteredData] = useState(busData)

  const contextValue = useMemo(
    () => ({
      userTravelData,
      setUserTravelData,
      search,
      setSearch,
      filteredData,
      setFilteredData,
    }),
    [userTravelData, search, filteredData, setFilteredData]
  )

  return (
    <Context.Provider value={contextValue}>
      <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </Context.Provider>
  )
}

export default App
