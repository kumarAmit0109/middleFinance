import React from 'react'
import bankim from "../assets/bankimage.webp"
import Header from './Header'
import Footers from './Footers'
import { Link } from 'react-router-dom'


function Lenders() {
  return (
    <div><Header/>
    <div className="w-11/12  max-w-7xl mx-auto md:w-10/12 grid lg:grid-cols-2 ">
    <div className="lg:py-32 space-y-4">
   <div className="text-4xl lg:text-6xl font-bold"> Powering digital home loans</div>
   <div className="text-lg">Middle allows lenders to instantly launch and manage digital home loans</div>
   <div className="bg-blue-100 p-1 rounded-xl ">☝️ Coming soon ! Get in touch for more details. Sorry for inconvenience</div><br></br>
   <Link to="/contact"><button className="bg-black text-white p-4 rounded-xl">Get in touch</button></Link>
    </div>
    <div>
      <img src={bankim}/>
    </div>
   


    </div>
    <Footers/>
    </div>
  )
}

export default Lenders