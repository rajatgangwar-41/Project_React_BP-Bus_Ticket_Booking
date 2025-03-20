import { AppLayout } from "../layout"
import { TopSearchCard } from "../components"
import { busData } from "../constants"

const TopSearch = () => {
  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-neutral-800">
          Top Search <span className="text-primary">Routes</span>
        </h1>
      </div>
      {/* Top Search Ticket Routes Card */}
      <ul className="w-full grid grid-cols-3 gap-5">
        {busData.slice(0, 6).map((bus, index) => {
          return (
            <li key={index}>
              <TopSearchCard bus={bus} />
            </li>
          )
        })}
      </ul>
    </AppLayout>
  )
}

export default TopSearch
