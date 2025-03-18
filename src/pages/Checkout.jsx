import React from "react"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { PassengerData, BookingStatus } from "../components"

const Checkout = () => {
  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Checkout" />
      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        <div className="w-full grid grid-cols-7 items-start gap-44 relative ">
          {/* Passenger Data */}
          <PassengerData />
          {/* Ticket Report Status */}
          <BookingStatus />
        </div>
      </AppLayout>
    </div>
  )
}

export default Checkout
