import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"

const App = () => {
  return (
    <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
