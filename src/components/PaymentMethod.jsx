import { useState } from "react"
import { PaymentCard } from "../components"
import { creditCard, masterCard, paypal } from "../assets"
import { FaPlus } from "react-icons/fa6"

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value)
  }

  return (
    <div className="w-full space-y-3">
      <h6 className="text-sm text-neutral-500 font-medium">
        Select Payment Method
      </h6>
      <div className="w-full grid grid-cols-2 gap-10">
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value="mastercard"
          onChange={handleChange}
          cardHolderName={"Rajat Gangwar"}
          cardNumber={"1234 5678 9012 3456"}
          cardImage={masterCard}
        />
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value="paypal"
          onChange={handleChange}
          cardHolderName={"Abhishek Singh"}
          cardNumber={"3957 4294 2434 4234"}
          cardImage={paypal}
        />
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value="credit card"
          onChange={handleChange}
          cardHolderName={"Karthik Sharma"}
          cardNumber={"3944 3958 2042 4850"}
          cardImage={creditCard}
        />
      </div>
      <div className="w-full flex justify-end">
        <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-primary">
          <FaPlus />
          <p className="capitalize">Add New Card</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
