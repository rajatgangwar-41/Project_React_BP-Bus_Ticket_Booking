import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import {
  Home,
  Contact,
  Ticket,
  Detail,
  Checkout,
  Invoice,
  Service,
} from "./pages"
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
        path: "/services",
        element: <Service />,
      },
      {
        path: "/tickets",
        element: <Ticket />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/ticket-book",
        element: <Detail />,
      },
      {
        path: "/ticket-checkout",
        element: <Checkout />,
      },
      {
        path: "/ticket-payment",
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
