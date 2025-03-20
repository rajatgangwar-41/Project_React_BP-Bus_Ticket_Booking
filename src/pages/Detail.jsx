import { AppLayout, TopLayout } from "../layout"
import { busInside } from "../assets"
import { Link, useLocation } from "react-router-dom"
import {
  Amenities,
  BusDetails,
  BusImages,
  BusSeat,
  ReservationPolicy,
  ToggleButton,
  Warning,
} from "../components"

const Detail = () => {
  const { state: bus } = useLocation()

  const message = (
    <>
      One User can book only 10 seats. If you want to book more than 10 tickets,
      Please&nbsp;
      <Link to="/support-team" className="text-red-500 font-medium">
        Contact Our Support Team
      </Link>
    </>
  )

  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Bus Details" className=""></TopLayout>
      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        {/* Seat Layout and selection action detail */}
        <div className="w-full space-y-8">
          {/* Warning Message */}
          <Warning message={message} />
          {/* Seat Layout */}
          <BusSeat bus={bus} />
        </div>
        {/* Bus Detail */}
        <div className="w-full flex items-center justify-start flex-col gap-8 text-center">
          {/* Short Description about the bus */}
          <p className="text-base text-neutral-500 font-normal text-justify">
            {bus.description}
            <span className="text-lg text-neutral-600 font-medium ml-2">
              Want to see more about the bus?
            </span>
          </p>
          {/* Button */}
          <div className="w-full flex items-center justify-center gap-6 flex-col">
            <ToggleButton
              buttonText={"See Bus Details"}
              buttonTextHidden={"Hide Bus Details"}
            >
              <div className="w-full space-y-10">
                {/* Reservation Policy And Amenities */}
                <div className="w-full grid grid-cols-10 gap-10">
                  {/* Amenities */}
                  <Amenities amenities={bus.amenities} />
                  {/* Bus Details */}
                  <BusDetails bus={bus} />
                  {/* Reservation Policy */}
                  <ReservationPolicy />
                </div>
                {/* Bus Images */}
                <BusImages />
              </div>
            </ToggleButton>
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default Detail
