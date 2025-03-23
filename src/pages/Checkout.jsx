/* eslint-disable no-unused-vars */
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { PassengerData, BookingStatus } from "../components"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { motion } from "motion/react"
import { useFilter } from "../hooks/useFilter"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

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
  const { state } = useFilter()
  const navigate = useNavigate()

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

  useEffect(() => {
    console.log(state)
    if (!state.userTravelData) {
      alert("You have not reserved any ticket yet")
      navigate("/tickets")
    }
  }, [navigate, state])

  return (
    <FormProvider {...methods}>
      <div className="w-full space-y-12 pb-16">
        {/* Top Layout */}
        <TopLayout bgImg={busInside} title="Checkout" />

        {/* Root Layout */}
        <AppLayout className="space-y-12 w-full pb-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-7 items-start gap-8 md:gap-20 relative">
            {/* Passenger Data */}
            <motion.div
              className="lg:col-span-3 2xl:col-span-4 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <PassengerData
                boardingPoints={state?.userTravelData?.bus?.boardingPoints}
                dropOffPoints={state?.userTravelData?.bus?.dropOffPoints}
              />
            </motion.div>

            {/* Ticket Report Status */}
            <motion.div
              className="lg:col-span-4 2xl:col-span-3 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BookingStatus />
            </motion.div>
          </div>
        </AppLayout>
      </div>
    </FormProvider>
  )
}

export default Checkout
