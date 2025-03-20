import { creditCard, masterCard, paypal } from "../assets"

const paymentMethod = [
  {
    method: "MasterCard",
    image: masterCard,
    name: "Rajat Gangwar",
    number: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    cvv: Math.floor(100 + Math.random() * 999).toString(),
    expiryDate: `${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    )}/${(new Date().getFullYear() % 100) + Math.floor(Math.random() * 6) + 1}`,
  },
  {
    method: "Paypal",
    image: paypal,
    name: "Abhishek Singh",
    number: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    cvv: Math.floor(100 + Math.random() * 999).toString(),
    expiryDate: `${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    )}/${(new Date().getFullYear() % 100) + Math.floor(Math.random() * 6) + 1}`,
  },
  {
    method: "Credit Card",
    image: creditCard,
    name: "Hrithik Kumar",
    number: Math.floor(1000000000 + Math.random() * 9000000000).toString(),
    cvv: Math.floor(100 + Math.random() * 999).toString(),
    expiryDate: `${String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    )}/${(new Date().getFullYear() % 100) + Math.floor(Math.random() * 6) + 1}`,
  },
]

export default paymentMethod
