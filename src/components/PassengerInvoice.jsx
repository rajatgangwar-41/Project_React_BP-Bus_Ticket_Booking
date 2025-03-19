import React from "react"
import { bus, qrCode } from "../assets"
import { FaCircleCheck, FaPhone } from "react-icons/fa6"
import { IoMdCloseCircle } from "react-icons/io"

const PassengerInvoice = () => {
  return (
    <div className="w-full col-span-4 rounded-3xl relative">
      {/* Top Bus Details */}
      <div className="w-full flex items-center justify-between bg-primary px-6 py-3 rounded-tl-3xl">
        <div className="flex items-center gap-x-3">
          <img
            src={bus}
            alt="Bus Image"
            className="w-auto h-12 object-cover object-center"
          />
          <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">
            Random Name
          </h1>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-xl text-neutral-50 font-bold">
            <span className="text-lg">(Bus No.)</span> DL-1234
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-6 mb-1">
        <div className="col-span-4 space-y-3.5">
          {/* Bill No, per sea and date */}
          <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
            <p className="text-base text-neutral-500 font-normal">
              Bill No. 1234
            </p>
            <p className="text-base text-neutral-500 font-normal">
              Rs. 1600 <span className="text-xs">/seat</span>
            </p>
            <p className="text-base text-neutral-500 font-normal">
              Date: 10-10-25<span className="text-xs">/seat</span>
            </p>
          </div>
          {/* Passenger Detail */}
          <div className="w-full flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-base text-neutral-500 font-normal">
                Name of Passenger:
                <span className="font-medium"> Rajat Gangwar</span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Total Seats Booked:
                <span className="font-medium"> A1, A2, A3, A4</span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Number of Passengers:
                <span className="font-medium"> 04 Only</span>
              </p>
              <p className="text-base text-neutral-500 font-normal">
                Pickup Station:
                <span className="font-medium"> Kashmiri Gate</span>
              </p>
            </div>
            <div className="space-y-4 flex items-center justify-center flex-col">
              <div className="space-y-1.5 text-center">
                <p className="text-base text-neutral-500 font-normal">
                  Total Price:
                </p>
                <h1 className="text-xl text-neutral-600 font-bold">Rs. 1600</h1>
              </div>
              <div className="w-fit px-3 py-1 border rounded-full bg-green-500/5 flex items-center justify-center gap-2 border-green-600 text-green-600 text-sm font-medium ">
                <FaCircleCheck size={16} />
                <span>Bill Paid</span>
              </div>
              {/* <div className="w-fit px-3 py-1 border rounded-full bg-primary/5 flex items-center justify-center gap-2 border-primary text-primary text-sm font-medium ">
                <IoMdCloseCircle size={16} />
                <span>Pending</span>
              </div> */}
            </div>
          </div>
          {/* Route Detail */}
          <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
            <p className="text-base text-neutral-600 font-normal">
              Delhi <span className="text-neutral-400 px-2"> ------ </span>
              Kichha
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Arrival Time: <span className="font-medium">2:00 PM</span>
            </p>
            <p className="text-base text-neutral-600 font-normal">
              Departure Time: <span className="font-medium">10:00 AM</span>
            </p>
          </div>
        </div>
        <div className="col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-full aspect-square object-cover object-center rounded-xl"
          />
        </div>
      </div>
      {/* Left Bottom Section */}
      <div className="w-full bg-primary absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between px-5 py-1.5">
        <p className="text-xs text-neutral-100 font-light">
          Note: 40% charge for cancellation price 24 Hours before the departure
          of the bus.
        </p>
        <div className="flex items-center gap-x-2">
          <FaPhone className="w-3 h-3 text-neutral-100" />
          <p className="text-sm text-neutral-100 font-light">
            +91-9380818203, +91-9283438273
          </p>
        </div>
      </div>
    </div>
  )
}

export default PassengerInvoice
