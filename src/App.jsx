
import { useState } from 'react'
import './App.css'
import Basket from './components/Basket'
import Cards from './components/Cards'
import Count from './components/Count'
import Footer from './components/Footer'
import Models from './components/Models'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Steps from './components/Steps'
import Transform from './components/Transform'
import Hero from './components/hero'

const getModels = async () => {
  const res = await fetch("/public/Models.json")
  return res.json()
}

const modelPromise = getModels()


function App() {

  const [activeTab, setActiveTab] = useState ("products");
  const [baskets, setBaskets] = useState ([]);
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Count/>
    <Cards/>

    <div className='max-w-11/12 mx-auto'>
      <div className="tabs tabs-box justify-center bg-transparent shadow-none">
        <input type="radio" name="my_tabs_1" className="tab rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-30" aria-label="Products" defaultChecked onClick={()=> setActiveTab("products")}/>
        <input type="radio" name="my_tabs_1" className="tab rounded-4xl w-30 border" aria-label={`Cart (${baskets.length})`} onClick={()=> setActiveTab("cart")}/>
      </div>
    </div>

    { activeTab === "products" && <Models modelPromise={modelPromise} baskets={baskets} setBaskets={setBaskets} />}
    { activeTab === "cart" && <Basket baskets={baskets} setBaskets={setBaskets} />}
    <Steps/>
    <Pricing/>
    <Transform/>
    <Footer/>

    </>
  )
}

export default App
