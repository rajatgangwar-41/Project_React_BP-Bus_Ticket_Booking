import { useFormContext } from "react-hook-form"
import { PaymentMethod } from "../components"

const PassengerData = ({ boardingPoints, dropOffPoints }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="w-full col-span-4 py-4 space-y-6">
      <h1 className="text-xl text-neutral-700 font-semibold">
        Passenger Information
      </h1>
      <div className="space-y-7">
        <div className="w-full space-y-2">
          <label
            htmlFor="fullname"
            className="text-sm text-neutral-500 font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="eg. Rajat"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>
        <div className="w-full space-y-2">
          <label
            htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="eg. rajat@example.com"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="tel" className="text-sm text-neutral-500 font-medium">
            Phone
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="eg. +91-9292939291"
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>
        <div className="w-full space-y-2">
          <label
            // htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Pickup Station
          </label>
          <select
            {...register("pickupStation")}
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal"
          >
            <option value="" disabled>
              Choose Your Nearest Pickup Station
            </option>
            {boardingPoints?.map((station, index) => {
              return (
                <option key={index} value={station}>
                  {station}
                </option>
              )
            })}
          </select>
          {errors.pickupStation && (
            <p className="text-red-500 text-xs">
              {errors.pickupStation.message}
            </p>
          )}
        </div>
        <div className="w-full space-y-2">
          <label
            // htmlFor="email"
            className="text-sm text-neutral-500 font-medium"
          >
            Drop Station
          </label>
          <select
            {...register("dropOffStation")}
            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal"
          >
            <option value="" disabled>
              Choose Your Nearest Drop Station
            </option>
            {dropOffPoints?.map((station, index) => {
              return (
                <option key={index} value={station}>
                  {station}
                </option>
              )
            })}
          </select>
          {errors.dropOffStation && (
            <p className="text-red-500 text-xs">
              {errors.dropOffStation.message}
            </p>
          )}
        </div>
      </div>
      {/* Payment Method */}
      <PaymentMethod />
    </div>
  )
}

export default PassengerData
