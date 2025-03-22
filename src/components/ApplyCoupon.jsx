import { useState } from "react"
import { discountData } from "../constants"
import { useFilter } from "../hooks/useFilter"

const ApplyCoupon = () => {
  const [coupon, setCoupon] = useState("")
  const [error, setError] = useState("")

  const { state, setUserTravelData } = useFilter()

  const handleApplyCoupon = () => {
    const formattedCoupon = coupon.trim().toUpperCase()
    const matchedCoupon = discountData.find(
      (coupon) => coupon.coupon_code === formattedCoupon
    )
    if (matchedCoupon) {
      const discountInPercent = parseInt(
        matchedCoupon?.discount?.replace("%", ""),
        10
      )
      const discountInRupees =
        (discountInPercent * state.userTravelData?.originalPrice) / 100

      setUserTravelData({
        discountInPercent,
        discountInRupees,
        discountedPrice:
          state?.userTravelData?.originalPrice - discountInRupees,
      })
      setError("")
    } else if (formattedCoupon === "") {
      setUserTravelData({
        discountInPercent: 0,
        discountInRupees: 0,
        discountedPrice: state?.userTravelData?.originalPrice,
      })
      setError("No Coupon Applied")
    } else {
      setUserTravelData({
        discountInPercent: 0,
        discountInRupees: 0,
        discountedPrice: state?.userTravelData?.originalPrice,
      })
      setError("Invalid coupon code")
    }
  }

  return (
    <div className="flex flex-col items-start pb-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter a coupon code"
          className="max-w-50 h-full flex-1 p-2 border text-sm rounded-md uppercase placeholder:capitalize"
        />
        <button
          onClick={handleApplyCoupon}
          className="w-fit h-full px-2 py-1 bg-primary hover:bg-transparent border-2 border-primary hover:border-primary rounded-md text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-primary ease-in-out duration-300 cursor-pointer"
        >
          Apply
        </button>
      </div>
      {error && <p className="text-primary text-sm mt-1 pl-2">{error}</p>}
    </div>
  )
}

export default ApplyCoupon
