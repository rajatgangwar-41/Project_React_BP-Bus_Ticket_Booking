/* eslint-disable no-unused-vars */
import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { toPng } from "html-to-image"
import download from "downloadjs"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { CompanyInvoice, PassengerInvoice } from "../components"

const Invoice = () => {
  const invoiceRef = useRef(null)
  const isInView = useInView(invoiceRef, { once: true }) // Animate only once when in view

  const handleDownload = async () => {
    if (invoiceRef.current === null) return
    try {
      const dataUrl = await toPng(invoiceRef.current)
      download(dataUrl, "ticket-invoice.png")
    } catch (error) {
      console.log("Error while downloading the invoice", error)
    }
  }

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Collect Your Invoice" />

      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">
          {/* Invoice Card with Animation */}
          <motion.div
            ref={invoiceRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-9/10 grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative"
          >
            {/* Left Side for Passenger */}
            <PassengerInvoice />
            {/* Right Side for Company */}
            <CompanyInvoice />
            {/* Cut Circle */}
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
            <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
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
            className="w-fit h-14 px-8 bg-primary text-neutral-50 font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Download Invoice
          </button>
        </motion.div>
      </AppLayout>
    </div>
  )
}

export default Invoice
