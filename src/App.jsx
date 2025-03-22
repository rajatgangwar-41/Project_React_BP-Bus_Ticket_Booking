import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"
import { ContextProvider } from "./context/Context"

const App = () => {
  return (
    <ContextProvider>
      <main className="w-full flex flex-col bg-neutral-50 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </ContextProvider>
  )
}

export default App
