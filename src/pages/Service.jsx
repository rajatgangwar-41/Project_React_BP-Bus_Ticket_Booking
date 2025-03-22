/* eslint-disable no-unused-vars */
import { busInside } from "../assets"
import { ServiceCard } from "../components"
import { servicePolicies } from "../constants"
import { AppLayout, TopLayout } from "../layout"
import { motion } from "motion/react"

const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Staggered effect
  },
}

const itemVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50, // Left for even, right for odd
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const Service = () => {
  return (
    <div className="w-full space-y-12 pb-16 ">
      {/* Top Layout */}
      <TopLayout bgImg={busInside} title="Explore our Services" className="" />
      {/* Root Layout */}
      <AppLayout className="space-y-12 relative">
        {/* Services Section */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          {/* <Services /> */}
          <div className="w-full flex items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, x: -800 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-3xl font-bold text-neutral-800"
            >
              Our <span className="text-primary">Services</span>
            </motion.h1>
          </div>
          {/* Service Card */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full grid grid-cols-3 gap-10"
          >
            {servicePolicies.map((policy, index) => (
              <motion.li
                key={policy.id}
                variants={itemVariants}
                custom={index}
                className="border-b pb-4 flex items-start gap-4"
              >
                <ServiceCard
                  icon={policy.icon}
                  title={policy.title}
                  description={policy.details[0]}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </AppLayout>
    </div>
  )
}

export default Service
