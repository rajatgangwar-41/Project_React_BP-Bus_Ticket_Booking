/* eslint-disable no-unused-vars */
import { AppLayout } from "../layout"
import { DiscountCard } from "."
import { discountData } from "../constants"
import { motion } from "motion/react"

const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Staggered effect
  },
}

// const itemVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotate: [0, 2, -2, 1, 0], // Slight wiggle effect
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

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

const Discount = () => {
  return (
    <AppLayout className="space-y-12">
      {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, x: -800 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-neutral-800"
        >
          Offers &<span className="text-primary"> Discounts Coupons</span>
        </motion.h1>
      </div>
      {/* Discount Card */}
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full grid grid-cols-3 gap-10"
      >
        {discountData.map((discount, index) => {
          return (
            <motion.li key={index} variants={itemVariants} custom={index}>
              <DiscountCard
                title={discount.title}
                discount={discount.discount}
                couponCode={discount.coupon_code}
                validity={discount.last_date}
                imgUrl={discount.img_url}
              />
            </motion.li>
          )
        })}
      </motion.ul>
    </AppLayout>
  )
}

export default Discount
