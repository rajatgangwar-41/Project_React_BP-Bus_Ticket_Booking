import React from "react"
import AppLayout from "../layout/AppLayout"
import { ServiceCard } from "../components"
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri"
import { PiHeadsetFill } from "react-icons/pi"

const Service = () => {
  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-neutral-800">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>
      {/* Service Card */}
      <div className="w-full grid grid-cols-3 gap-10">
        <ServiceCard
          icon={RiSecurePaymentLine}
          title="Secure Payment"
          description="Integrate secure payment gateways for users to pay for their tickets."
        />
        <ServiceCard
          icon={RiRefund2Line}
          title="Refund Policy"
          description="Offer options for the users to purchase refundable tickets with clear terms."
        />
        <ServiceCard
          icon={PiHeadsetFill}
          title="24/7 Support"
          description="Provide 24/7 customer support to help users with their queries and issues."
        />
      </div>
    </AppLayout>
  )
}

export default Service
