/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
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
    <motion.div
      className="w-full space-y-12 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Bus Details" />

      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        {/* Seat Layout and selection action detail */}
        <Reveal>
          <div className="w-full space-y-8">
            {/* Warning Message */}
            <Warning message={message} />
            {/* Seat Layout */}
            <BusSeat bus={bus} />
          </div>
        </Reveal>

        {/* Bus Detail (Fixed) */}
        <motion.div
          className="w-full flex items-center justify-start flex-col gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Short Description about the bus */}
          <p className="text-base text-neutral-500 font-normal text-justify">
            {bus.description}
            <span className="text-lg text-neutral-600 font-medium ml-2">
              Want to see more about the bus?
            </span>
          </p>

          {/* Button */}
          <motion.div
            className="w-full flex items-center justify-center gap-6 flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <ToggleButton
              buttonText={"See Bus Details"}
              buttonTextHidden={"Hide Bus Details"}
            >
              <motion.div
                className="w-full space-y-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
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
              </motion.div>
            </ToggleButton>
          </motion.div>
        </motion.div>
      </AppLayout>
    </motion.div>
  )
}

// Scroll Reveal Wrapper Component
const Reveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default Detail
