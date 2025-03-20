import React from "react"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { PassengerData, BookingStatus } from "../components"
import { useLocation } from "react-router-dom"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  email: z.string().email("Invalid email address"),

  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d{10}$/, "Phone number must contain only numbers"),

  pickupStation: z.string().min(3, "Pickup station must be selected"),
  dropOffStation: z.string().min(3, "Drop station must be selected"),

  paymentMethod: z.string().min(1, "Payment method must be selected"),
})

const Checkout = () => {
  const { state: bus } = useLocation()

  const methods = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      pickupStation: "",
      dropOffStation: "",
      paymentMethod: "",
    },
  })

  return (
    <FormProvider {...methods}>
      <div className="w-full space-y-12 pb-16 ">
        {/* Top Layout */}
        <TopLayout bgImg={busInside} title="Checkout" />
        {/* Root Layout */}
        <AppLayout className="space-y-12 w-full pb-16">
          <div className="w-full grid grid-cols-7 items-start gap-44 relative ">
            {/* Passenger Data */}
            <PassengerData
              boardingPoints={bus.boardingPoints}
              dropOffPoints={bus.dropOffPoints}
            />
            {/* Ticket Report Status */}
            <BookingStatus />
          </div>
        </AppLayout>
      </div>
    </FormProvider>
  )
}

export default Checkout
