import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"

var element = document.getElementById("root")

if (element != null) {
  createRoot(element).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}
