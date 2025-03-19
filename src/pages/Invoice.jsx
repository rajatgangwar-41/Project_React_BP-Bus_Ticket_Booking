import { useRef } from "react"
import { toPng } from "html-to-image"
import download from "downloadjs"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { CompanyInvoice, PassengerInvoice } from "../components"

const Invoice = () => {
  const invoiceRef = useRef(null)

  const handleDownload = async () => {
    if (invoiceRef.current === null) return
    try {
      // convert the invoice card to image
      const dataUrl = await toPng(invoiceRef.current)
      // Download the image
      download(dataUrl, "ticket-invoice.png")
    } catch (error) {
      console.log("Error while downloading the invoice", error)
    }
  }

  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Collect Your Invoice" />
      {/* Root Layout */}
      <AppLayout className="space-y-12 w-full pb-16">
        <div className="w-full flex items-center justify-center">
          {/* Invoice Card */}
          <div
            ref={invoiceRef}
            className="w-9/10 grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative"
          >
            {/* Left Side for Passenger */}
            <PassengerInvoice />
            {/* Right Side for Passenger */}
            <CompanyInvoice />
            {/* Cut Circle */}
            <div className="absolute -top-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
            <div className="absolute -bottom-3 right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
          </div>
        </div>
        {/* Download Invoice Card Button */}
        <div className="w-full flex items-center justify-center">
          <button
            onClick={handleDownload}
            className="w-fit h-14 px-8 bg-primary text-neutral-50 font-bold text-lg rounded-lg"
          >
            Download Invoice
          </button>
        </div>
      </AppLayout>
    </div>
  )
}

export default Invoice
