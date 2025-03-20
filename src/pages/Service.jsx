/* eslint-disable no-unused-vars */
import { busInside } from "../assets"
import { Services } from "../components"
import { AppLayout, TopLayout } from "../layout"
import { motion } from "motion/react"

const Service = () => {
  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout
        bgImg={busInside}
        title="Explore our Services"
        className=""
      ></TopLayout>
      {/* Root Layout */}
      <AppLayout className="space-y-12 relative">
        {/* Services Section */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <Services />
        </div>
      </AppLayout>
    </div>
  )
}

export default Service
