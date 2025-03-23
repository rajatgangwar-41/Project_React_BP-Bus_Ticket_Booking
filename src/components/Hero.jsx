/* eslint-disable no-unused-vars */
import { motion } from "motion/react"
import AppLayout from "../layout/AppLayout"
import { Search } from "../components"

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: -800 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="w-full flex-1 h-screen bg-[url('./assets/herobg.png')] bg-no-repeat bg-top sm:bg-center bg-cover relative"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.85, ease: "easeInOut" }}
    >
      <AppLayout className="absolute top-0 left-0 w-full h-full py-[9ch] bg-gradient-to-b from-neutral-50/70 via-neutral-50/15 to-neutral-50/5 flex items-center justify-start text-center flex-col gap-9">
        <div className="spaces-y-2">
          <motion.p
            className="text-base md:text-xl xl:text-2xl text-neutral-500 font-medium"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Get Your Bus Tickets
          </motion.p>
          <motion.h1
            className="text-3xl md:text-4xl xl:text-5xl px-5 text-neutral-800 font-bold capitalize"
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.85, ease: "easeOut" }}
          >
            Find Best Bus For Your Journey!
          </motion.h1>
        </div>
        <Search />
      </AppLayout>
    </motion.div>
  )
}

export default Hero
