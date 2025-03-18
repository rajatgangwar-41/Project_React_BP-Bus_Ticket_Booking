import React from "react"
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io"

const PaymentCard = ({
  selectedPayment,
  value,
  onChange,
  cardHolderName,
  cardNumber,
  // expiryDate,
  cardImage,
}) => {
  return (
    <label
      className={`w-full flex items-end px-4 py-2 border-2 rounded-xl relative cursor-pointer ${
        selectedPayment === value
          ? "border-indigo-500/80 bg-indigo-500/15"
          : "border-neutral-300 bg-neutral-100/40"
      }`}
    >
      <div className="w-full flex items-center justify-between gap-7">
        <div className="flex items-center gap-x-3">
          <div className="w-fit h-16 rounded-lg">
            <img
              src={cardImage}
              alt="payment img"
              className="w-full h-full object-contain object-center rounded-lg"
            />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-base text-neutral-600 font-medium">
              {cardHolderName}
            </h1>
            <p className="text-neutral-500 text-sm font-normal">
              **** **** **** {cardNumber.slice(-4)}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {selectedPayment === value ? (
            <IoMdRadioButtonOn className="w-7 h-7 text-indigo-500" />
          ) : (
            <IoMdRadioButtonOff className="w-7 h-7" />
          )}
        </div>
      </div>
      {/* Radio Button */}
      <input
        type="radio"
        value={value}
        onChange={onChange}
        checked={selectedPayment === value}
        className="hidden"
      />
    </label>
  )
}

export default PaymentCard
