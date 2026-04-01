
import './App.css'
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

  return (
    <>
    <Navbar/>
    <Hero/>
    <Count/>
    <Cards/>
    <Models modelPromise={modelPromise}/>
    <Steps/>
    <Pricing/>
    <Transform/>
    <Footer/>

    </>
  )
}

export default App
