import { useState } from "react"
import { PaymentCard } from "../components"
import { FaPlus } from "react-icons/fa6"
import { paymentMethod } from "../constants"
import { useFormContext } from "react-hook-form"

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [isCardOpen, setIsCardOpen] = useState(false)

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value)
    setValue("paymentMethod", e.target.value, { shouldValidate: true }) //
  }

  const handleAddCard = () => {
    setIsCardOpen((prev) => !prev)
    clearTimeout(window.cardTimeout)
    window.cardTimeout = setTimeout(() => {
      setIsCardOpen(false)
    }, 2000)
  }

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="w-full space-y-3">
      <h6 className="text-sm text-neutral-500 font-medium">
        Select Payment Method
      </h6>
      <div className="w-full grid grid-cols-2 gap-10">
        {paymentMethod.map((card, index) => {
          return (
            <PaymentCard
              key={index}
              selectedPayment={selectedPaymentMethod}
              value={card.method}
              onChange={handleChange}
              cardHolderName={card.name}
              cardNumber={card.number}
              cardImage={card.image}
              cvv={card.cvv}
              expiryDate={card.expiryDate}
              register={register} // Pass register props
            />
          )
        })}
      </div>
      {/* Show error message */}
      {errors.paymentMethod && (
        <p className="text-red-500 text-xs">{errors.paymentMethod.message}</p>
      )}
      <div className="w-full flex justify-end">
        <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-primary">
          <FaPlus />
          <p className="capitalize" onClick={handleAddCard}>
            Add New Card
          </p>
        </div>
      </div>
      {isCardOpen && (
        <p className="test-xs text-black/80 flex justify-end">
          To Be Done In Future
        </p>
      )}
    </div>
  )
}

export default PaymentMethod
