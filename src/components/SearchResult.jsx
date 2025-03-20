import { FaBus } from "react-icons/fa6"
import { GrRefresh } from "react-icons/gr"
import { TicketCard } from "../components"
import { useContext, useState } from "react"
import { Context } from "../App"
import { noResult } from "../assets"

const SearchResult = () => {
  const [busCount, setBusCount] = useState(5)
  const { filteredData } = useContext(Context)

  const handleBusCountChange = () => {
    setBusCount(filteredData.length)
  }

  return (
    <div className="w-full col-span-3 space-y-10 pt-11">
      <ul className="space-y-6">
        {filteredData
          .slice(0, Math.min(busCount, filteredData.length))
          .map((bus, index) => {
            return (
              <li key={index}>
                <TicketCard icon={FaBus} bus={bus} />
              </li>
            )
          })}
      </ul>
      {filteredData.length !== 0 && busCount !== filteredData.length && (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleBusCountChange}
            className="w-fit px-8 py-3 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
          >
            <GrRefresh />
            Load More
          </button>
        </div>
      )}
      {filteredData.length === 0 && (
        <div className="w-full flex items-center justify-center">
          <img
            src={noResult}
            alt="No Result Found"
            className="mix-blend-multiply"
          />
        </div>
      )}
    </div>
  )
}

export default SearchResult
