/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import AppLayout from "../layout/AppLayout"
import { masterCard, creditCard, paypal } from "../assets"
import { socialMedia } from "../constants"
import { useFilter } from "../hooks/useFilter"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const Footer = () => {
  const { state, setSearch, applyFilter } = useFilter()
  const navigate = useNavigate()

  const handleRouteClick = (from, to) => {
    setSearch({ routeFrom: from, routeTo: to })
    applyFilter()
    navigate("/tickets")
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-auto bg-neutral-950 px-5 py-10"
    >
      <AppLayout className="space-y-10">
        {/* Footer Content */}
        <motion.div
          variants={staggerContainer}
          className="w-full grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Logo & Description */}
          <motion.div
            variants={fadeUpVariant}
            className="col-span-1 md:col-span-2 space-y-8 md:pr-10 pr-0"
          >
            <div className="space-y-3">
              <Link
                to="/"
                className="text-5xl md:text-6xl text-primary font-bold"
              >
                Bus
              </Link>
              <p className="w-8/10 pt-3 text-base text-neutral-500 font-normal text-justify">
                Our online bus ticket booking website makes travel easy and
                hassle-free. Enjoy secure payments, real-time seat selection,
                and instant confirmations.
              </p>
            </div>

            {/* Social Links */}
            <motion.ul
              variants={staggerContainer}
              className="w-full flex flex-wrap items-center gap-3 md:gap-5"
            >
              {socialMedia.map((ele) => (
                <motion.li
                  key={ele.id}
                  variants={fadeUpVariant}
                  onClick={() => window.open(ele.url, "_blank")}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-300"
                >
                  <ele.icon className="w-4 h-4 md:w-5 md:h-5 text-neutral-50" />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUpVariant} className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Quick Links
            </h1>
            <motion.div variants={staggerContainer} className="space-y-2">
              {[
                "About Us",
                "My Account",
                "Reserve Your Ticket",
                "Create Your Account",
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUpVariant}>
                  <Link
                    to="/"
                    className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Top Reserved Routes */}
          <motion.div variants={fadeUpVariant} className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Top Reserved Routes
            </h1>
            <motion.div variants={staggerContainer} className="space-y-2">
              {[
                { from: "Delhi", to: "Mumbai" },
                { from: "Delhi", to: "Jaipur" },
                { from: "Mumbai", to: "Nashik" },
                { from: "Pune", to: "Nagpur" },
              ].map((route, index) => (
                <motion.button
                  key={index}
                  variants={fadeUpVariant}
                  onClick={() => handleRouteClick(route.from, route.to)}
                  className="block text-base cursor-pointer text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
                >
                  {route.from} - {route.to}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={fadeUpVariant} className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold">
              Support Links
            </h1>
            <motion.div variants={staggerContainer} className="space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Help & Support Center",
                "FAQs",
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUpVariant}>
                  <Link
                    to="/contact"
                    className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Separator */}
        <motion.div
          variants={fadeUpVariant}
          className="w-full h-px bg-neutral-800/50"
        />

        {/* Copyright & Payment Methods */}
        <motion.div
          variants={fadeUpVariant}
          className="w-full flex flex-wrap items-center justify-center md:justify-between gap-4"
        >
          <p className="text-sm text-neutral-600 font-normal text-center md:text-left">
            Copyright &copy; 2025. All Rights Reserved
          </p>
          <p className="text-sm text-neutral-600 font-normal text-center md:text-left">
            Made with 💗 by Rajat Gangwar
          </p>
          <motion.div
            variants={staggerContainer}
            className="flex items-center gap-2"
          >
            {[masterCard, paypal, creditCard].map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt=""
                variants={fadeUpVariant}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-7 object-contain cursor-pointer ease-in-out duration-300"
              />
            ))}
          </motion.div>
        </motion.div>
      </AppLayout>
    </motion.div>
  )
}

export default Footer
