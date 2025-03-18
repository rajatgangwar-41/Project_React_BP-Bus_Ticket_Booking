import React from "react"
import { Hero, Service, TopSearch } from "../components"

const Home = () => {
  return (
    <div className="space-y-16 w-full min-h-screen pb-16">
      <Hero />
      <Service />
      <TopSearch />
    </div>
  )
}

export default Home
