import React from "react"
import { Discount, Hero, TopSearch } from "../components"

const Home = () => {
  return (
    <div className="space-y-16 w-full min-h-screen pb-16">
      <Hero />
      <Discount />
      <TopSearch />
    </div>
  )
}

export default Home
