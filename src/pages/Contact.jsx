/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { busInside } from "../assets"
import { AppLayout, TopLayout } from "../layout"
import { BiHelpCircle } from "react-icons/bi"
import { RiShieldCheckFill } from "react-icons/ri"
import { IoDocumentTextOutline } from "react-icons/io5"
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa"
import { faqs } from "../constants"
import { motion, useInView } from "motion/react"

const SectionWrapper = ({ children }) => (
  <motion.div
    className="flex-1 flex items-stretch"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)

const useFaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return { openIndex, toggleAccordion }
}

const FaqItem = ({ faq, index, openIndex, toggleAccordion }) => {
  const itemRef = useRef(null)
  const itemInView = useInView(itemRef, { once: true })
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={itemInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border rounded-lg"
    >
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-neutral-700/90 bg-gray-100 hover:bg-neutral-200/80 rounded-lg transition-all"
      >
        {faq.question}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: openIndex === index ? "auto" : 0,
          opacity: openIndex === index ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-4 py-3 text-neutral-700/80 bg-neutral-50">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

const FaqAccordion = () => {
  const { openIndex, toggleAccordion } = useFaqAccordion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-6 bg-neutral-50 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-neutral-700/90 mb-4">
        <FaQuestionCircle className="text-blue-500" />
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            index={index}
            openIndex={openIndex}
            toggleAccordion={toggleAccordion}
          />
        ))}
      </div>
    </motion.div>
  )
}

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl flex gap-x-2 font-semibold text-gray-800 mb-4">
        Privacy Policy
        <RiShieldCheckFill className="w-10 h-10 pt-1" />
      </h1>
      <p className="text-gray-600 mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        1. Information We Collect
      </h2>
      <p className="text-gray-600">
        We collect personal information such as your name, email, phone number,
        and payment details when you book tickets on our platform.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        2. How We Use Your Information
      </h2>
      <ul className="text-gray-600 list-disc ml-6">
        <li>To process ticket bookings and payments.</li>
        <li>To provide customer support and updates.</li>
        <li>To improve our services and user experience.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        3. Data Protection
      </h2>
      <p className="text-gray-600">
        We implement security measures to protect your data from unauthorized
        access, alteration, or disclosure.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        4. Third-Party Services
      </h2>
      <p className="text-gray-600">
        We may share limited information with trusted third parties for payment
        processing and service enhancements.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        5. Changes to This Policy
      </h2>
      <p className="text-gray-600">
        We may update this policy from time to time. Please review it
        periodically.
      </p>

      <p className="text-gray-600 mt-6">
        If you have any questions, contact us at{" "}
        <span
          onClick={() => window.open("mailto:support@busbooking.com", "_blank")}
          className="font-semibold text-indigo-600 cursor-pointer"
        >
          support@busbooking.com
        </span>
        .
      </p>
    </div>
  )
}

const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl flex gap-x-2 font-semibold text-gray-800 mb-4">
        Terms & Conditions
        <IoDocumentTextOutline className="w-10 h-9" />
      </h1>
      <p className="text-gray-600 mb-4">
        By using our bus ticket booking platform, you agree to the following
        terms and conditions.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        1. Ticket Booking
      </h2>
      <p className="text-gray-600">
        All bookings are subject to seat availability. A confirmed booking is
        required to board the bus.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        2. Cancellations & Refunds
      </h2>
      <ul className="text-gray-600 list-disc ml-6">
        <li>Cancellations must be made at least 24 hours before departure.</li>
        <li>Refunds are subject to our cancellation policy.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        3. Passenger Responsibilities
      </h2>
      <p className="text-gray-600">
        Passengers must carry valid identification and arrive at the boarding
        point on time.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        4. Service Liability
      </h2>
      <p className="text-gray-600">
        We are not responsible for delays due to traffic, weather, or unforeseen
        circumstances.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        5. Changes to Terms
      </h2>
      <p className="text-gray-600">
        We may update these terms at any time. Please review them periodically.
      </p>

      <p className="text-gray-600 mt-6">
        If you have any questions, contact us at{" "}
        <span
          onClick={() => window.open("mailto:support@busbooking.com", "_blank")}
          className="font-semibold text-indigo-600 cursor-pointer"
        >
          support@busbooking.com
        </span>
        .
      </p>
    </div>
  )
}

const HelpSupport = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl flex gap-x-2 font-semibold text-gray-800 mb-4">
        Help & Support
        <BiHelpCircle className="w-10 h-9" />
      </h1>
      <p className="text-gray-600 mb-4">
        Need assistance? We're here to help! Explore our FAQs or contact our
        support team.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">1. FAQs</h2>
      <p className="text-gray-600">
        Browse through our frequently asked questions for quick solutions.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        2. Contact Customer Support
      </h2>
      <ul className="text-gray-600 list-disc ml-6">
        <li>Email: support@busbooking.com</li>
        <li>Phone: +91 1800 123 4567</li>
        <li>Live Chat: Available 24/7</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        3. Refund & Cancellation
      </h2>
      <p className="text-gray-600">
        Need to cancel a ticket? Review our refund policy for more details.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        4. Report an Issue
      </h2>
      <p className="text-gray-600">
        If you're facing any issues, please report them, and our team will get
        back to you as soon as possible.
      </p>

      <p className="text-gray-600 mt-6">
        For further assistance, reach out to us at{" "}
        <span
          onClick={() => window.open("mailto:support@busbooking.com", "_blank")}
          className="font-semibold text-indigo-600 cursor-pointer"
        >
          support@busbooking.com
        </span>
        .
      </p>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Contact Us" />
      {/* Root Layout */}
      <AppLayout className="space-y-12 relative">
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-neutral-50 py-4 flex flex-wrap gap-8"
        >
          <SectionWrapper>
            <PrivacyPolicy />
          </SectionWrapper>
          <SectionWrapper>
            <TermsAndConditions />
          </SectionWrapper>
          <SectionWrapper>
            <HelpSupport />
          </SectionWrapper>
        </motion.div>
        <FaqAccordion />
      </AppLayout>
    </div>
  )
}

export default Contact
