import React from 'react'
import PreviousPartners from './PrevPartners'
import Footer from './Footer'

function Bottom() {
  return (
<div className="min-h-[100vh] md:min-h-[200vh] bg-[url('https://utfs.io/f/453169aa-1596-4503-84e1-b0731aece002-uz18r6.png')] bg-cover bg-center ">
    <PreviousPartners/>
    <h1
  className="text-center text-6xl sm:text-6xl md:text-8xl tracking-widest font-misteri mt-32 sm:mt-48 md:mt-60 lg:mt-72 mb-36 text-white pt-80 px-6 lg:py-20 lg:px-4 animate-fade-in-left"
  style={{
    textShadow: "0px 0px 2px #8F00FF, 0px 0px 8px #fff",
  }}
>
  Ecstasia <br /> Awaits your Arrival!
</h1>
  <Footer/>
</div>
  )
}

export default Bottom