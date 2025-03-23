/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react"
import { motion, useInView } from "motion/react"
import { toPng } from "html-to-image"
import download from "downloadjs"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { CompanyInvoice, PassengerInvoice } from "../components"
import { useFilter } from "../hooks/useFilter"
import { useNavigate } from "react-router-dom"

const Invoice = () => {
  const invoiceRef = useRef(null)
  const isInView = useInView(invoiceRef, { once: true }) // Animate only once when in view
  const { state } = useFilter()
  const navigate = useNavigate()

  const handleDownload = async () => {
    if (invoiceRef.current === null) return
    try {
      const dataUrl = await toPng(invoiceRef.current)
      download(dataUrl, "ticket-invoice.png")
    } catch (error) {
      console.log("Error while downloading the invoice", error)
    }
  }

  useEffect(() => {
    console.log(state)
    if (!state.userTravelData) {
      alert("You have not reserved any ticket yet")
      navigate("/tickets")
    }
  }, [navigate, state])

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Collect Your Invoice" />

      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8">
          {/* Invoice Card with Animation */}
          <motion.div
            ref={invoiceRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-8xl grid grid-cols-1 2xl:grid-cols-5 bg-white gap-y-15 rounded-3xl border border-neutral-200 shadow-sm relative"
          >
            {/* Left Side for Passenger */}
            <PassengerInvoice />
            {/* Right Side for Company */}
            <CompanyInvoice />

            {/* Cut Circle (Hidden on Small Screens) */}
            <div className="hidden 2xl:block absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
            <div className="hidden 2xl:block absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
          </motion.div>
        </div>

        {/* Download Invoice Button with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex items-center justify-center"
        >
          <button
            onClick={handleDownload}
            className="h-12 md:h-14 px-6 md:px-8 bg-primary text-neutral-50 font-bold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Download Invoice
          </button>
        </motion.div>
      </AppLayout>
    </div>
  )
}

export default Invoice
