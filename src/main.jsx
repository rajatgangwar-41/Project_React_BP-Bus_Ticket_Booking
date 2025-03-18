import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import { Home, About, Ticket, Detail, Checkout, Invoice } from "./pages"
import "./index.css"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tickets",
        element: <Ticket />,
      },
      {
        path: "/tickets/detail",
        element: <Detail />,
      },
      {
        path: "/tickets/checkout",
        element: <Checkout />,
      },
      {
        path: "/tickets/payment",
        element: <Invoice />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
