import {
  FaUndoAlt,
  FaClock,
  FaChair,
  FaSignInAlt,
  FaSuitcase,
  FaChild,
  FaUtensils,
  FaHeadset,
} from "react-icons/fa"
import { FaMoneyBillWave } from "react-icons/fa6"
import { GiHealthNormal } from "react-icons/gi"
import { MdGpsFixed, MdLock } from "react-icons/md"

const servicePolicies = [
  {
    id: 1,
    title: "Cancellation & Refund Policy",
    icon: FaUndoAlt,
    details: [
      "Full refund for cancellations made 24 hours before departure.",
      "50% refund for cancellations 12-24 hours before departure.",
      "No refund for cancellations made less than 12 hours before departure.",
    ],
  },
  {
    id: 2,
    title: "Rescheduling Policy",
    icon: FaClock,
    details: [
      "Tickets can be rescheduled once for free up to 12 hours before departure.",
      "Additional reschedules may incur a small fee.",
    ],
  },
  {
    id: 3,
    title: "Seat Selection Policy",
    icon: FaChair,
    details: [
      "Passengers can select seats during booking.",
      "Changes to seat selection are allowed up to 1 hour before departure.",
    ],
  },
  {
    id: 4,
    title: "Boarding & Check-in Policy",
    icon: FaSignInAlt,
    details: [
      "Passengers must arrive at the boarding point at least 15 minutes before departure.",
      "A valid ID and ticket confirmation are required for check-in.",
    ],
  },
  {
    id: 5,
    title: "Luggage Policy",
    icon: FaSuitcase,
    details: [
      "Each passenger is allowed one checked bag (up to 15 kg) and one carry-on.",
      "Extra luggage may be charged based on weight and space availability.",
    ],
  },
  {
    id: 6,
    title: "Child & Senior Citizen Policy",
    icon: FaChild,
    details: [
      "Children under 5 years travel for free (if seated with a parent).",
      "Senior citizens may receive special discounts and priority boarding.",
    ],
  },
  {
    id: 7,
    title: "Food & Beverage Policy",
    icon: FaUtensils,
    details: [
      "Complimentary water bottles are provided.",
      "Snacks/meals may be available on certain routes for an additional charge.",
    ],
  },
  {
    id: 8,
    title: "Travel Insurance Policy",
    icon: GiHealthNormal,
    details: [
      "Optional travel insurance is available for passengers.",
      "All buses are equipped with CCTV, GPS tracking, and emergency contact services.",
    ],
  },
  {
    id: 9,
    title: "Customer Support Policy",
    icon: FaHeadset,
    details: [
      "24/7 customer support is available via phone, email, and live chat.",
      "Complaints and refund requests are handled within 5-7 business days.",
    ],
  },
  {
    id: 10,
    title: "Flexible Payment Options",
    icon: FaMoneyBillWave,
    details: [
      "Choose from multiple payment methods including credit cards, UPI, and wallets.",
    ],
  },
  {
    id: 11,
    title: "Secure Transactions",
    icon: MdLock,
    details: [
      "All payments are encrypted and protected with top-tier security standards.",
    ],
  },
  {
    id: 12,
    title: "Real-Time Bus Tracking",
    icon: MdGpsFixed,
    details: [
      "Track your bus in real-time to stay updated on its exact location and estimated arrival time.",
    ],
  },
]

export default servicePolicies
