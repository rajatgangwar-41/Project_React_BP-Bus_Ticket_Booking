import React from "react"
import AppLayout from "../layout/AppLayout"
import { ServiceCard } from "../components"
import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri"
import { PiHeadsetFill } from "react-icons/pi"
import { servicePolicies } from "../constants"

const Services = () => {
  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-neutral-800">
          Our <span className="text-primary">Services</span>
        </h1>
      </div>
      {/* Service Card */}
      <ul className="w-full grid grid-cols-3 gap-10">
        {servicePolicies.map((policy) => (
          <li key={policy.id} className="border-b pb-4 flex items-start gap-4">
            <ServiceCard
              icon={policy.icon}
              title={policy.title}
              description={policy.details[0]}
            />
          </li>
        ))}
      </ul>
    </AppLayout>
  )
}

export default Services
