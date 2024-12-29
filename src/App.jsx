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
      <div className="fixed bottom-3 left-1/2 -translate-x-[50%] text-center rounded-full bg-white text-black shadow-lg px-4 py-2 font-semibold">
        Crafted with ✋ by <a className="font-bold" target="_blank" href="https://dhruvroy.in">Dhruv Roy</a>
      </div>
    </>
  )
}

export default App




