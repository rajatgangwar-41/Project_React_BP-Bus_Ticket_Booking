import { useState } from "react"
import { FaCopy } from "react-icons/fa6"

const DiscountCard = ({ title, discount, couponCode, validity, imgUrl }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (couponCode) => {
    navigator.clipboard
      .writeText(couponCode)
      .then(() => {
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
        }, 2000)
      })
      .catch((error) => console.log("Failed to copy the coupon", error))
  }
  return (
    <div className="w-full min-h-[200px] rounded-xl bg-neutral-300/20 hover:bg-neutral-300/40 px-5 py-4 flex items-center justify-evenly gap-x-5 shadow-md cursor-pointer">
      <img
        src={imgUrl}
        alt={`Discount Coupon`}
        className="w-25 @xs:w-27 @md:w-40 @xl:w-45 @3xl:w-35 aspect-[1] object-cover object-center mix-blend-multiply"
      />
      <div className="flex flex-col space-y-2">
        <h1 className="text-base @sm:text-lg @lg:text-xl font-semibold text-neutral-800 ">
          {title}
        </h1>
        <p className="font-medium text-sm @sm:text-base text-neutral-600">
          Discount: {discount} off
        </p>
        <div className="flex text-sm @sm:text-base items-center gap-x-5">
          <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 bg-violet-500/10 rounded-mg p-3 ">
            {copied ? (
              <span className="text-green-600">Copied</span>
            ) : (
              <span className="text-green-600">{couponCode}</span>
            )}
          </div>
          {/* Copy Button */}
          <button
            onClick={() => handleCopy(couponCode)}
            className="text-xl text-indigo-600 cursor-pointer"
            aria-label="Copy"
          >
            <FaCopy />
          </button>
        </div>
        <p className="text-sm @sm:text-base text-neutral-500 font-normal">
          Valid till:
          <span className="font-medium"> {validity}</span>
        </p>
      </div>
    </div>
  )
}

export default DiscountCard
