import Features from "./sections/Features"
import Footer from "./sections/Footer"
import Future from "./sections/Future"
import Home from "./sections/Home"
import Price from "./sections/Price"
import Reviews from "./sections/Reviews"
import Services from "./sections/Services"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
      <Home/>
      <Services/>
      <Features/>
      <Price/>
      <Reviews/>
      <Future/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App




