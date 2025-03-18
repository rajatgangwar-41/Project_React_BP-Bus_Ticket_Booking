import AppLayout from "../layout/AppLayout"
import { TopSearchCard } from "../components"

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
      <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard
          routeFrom="Delhi"
          routeTo="Mumbai"
          timeDuration="12h 30m"
          price="1600"
        />
        <TopSearchCard
          routeFrom="Dhaka"
          routeTo="Chittagong"
          timeDuration="6h 30m"
          price="800"
        />
        <TopSearchCard
          routeFrom="Dhaka"
          routeTo="Chittagong"
          timeDuration="6h 30m"
          price="800"
        />
        <TopSearchCard
          routeFrom="Delhi"
          routeTo="Mumbai"
          timeDuration="12h 30m"
          price="1600"
        />
        <TopSearchCard
          routeFrom="Dhaka"
          routeTo="Chittagong"
          timeDuration="6h 30m"
          price="800"
        />
        <TopSearchCard
          routeFrom="Dhaka"
          routeTo="Chittagong"
          timeDuration="6h 30m"
          price="800"
        />
      </div>
    </AppLayout>
  )
}

export default TopSearch
