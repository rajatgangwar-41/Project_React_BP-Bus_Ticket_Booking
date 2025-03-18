import React from "react"
import { busImage1, busImage2, busImage3, busImage4 } from "../assets"

const BusImages = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-5 items-center border-t border-neutral-300 pt-7 pb-2">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={busImage1}
          alt="Bus Image"
          className="w-full aspect-video object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={busImage2}
          alt="Bus Image"
          className="w-full aspect-video object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={busImage3}
          alt="Bus Image"
          className="w-full aspect-video object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src={busImage4}
          alt="Bus Image"
          className="w-full aspect-video object-center rounded-xl border border-neutral-300/50 bg-neutral-200/15"
        />
      </div>
    </div>
  )
}

export default BusImages
