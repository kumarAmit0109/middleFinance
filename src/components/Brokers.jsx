import React from 'react'
import { Link } from 'react-router-dom'
import brokerim from "../assets/brokerimage.webp"
import brokerfr from "../assets/brokerfirst.webp"
import brokerse from "../assets/brokersecond.webp"
import brokerth from "../assets/brokerthird.webp"
import brokerho from "../assets/brokerhome.webp"
import Header from './Header'
import Footers from './Footers'



function Brokers() {
 
  return (
    <div><Header/>
    <div className="bg-blue-100">
    
       <div className="flex flex-col justify-center items-center py-20 gap-10 bg-blue-100 w-11/12 md:w-10/12 mx-auto max-w-6xl">
        <div className="text-3xl lg:text-6xl font-bold">Middle, the new way</div>
        <div  className=" text-3xl lg:text-6xl font-bold -mt-8">to onboard clients</div>
        <div className="text-lg">Client discovery in minutes for the ultimate onboarding experience</div>
        <Link to="https://www.youtube.com/"><button className="text-lg bg-black p-3 rounded-lg text-white">Join the Waitlist</button></Link>
       </div>
        </div>
       <div className="flex justify-center items-center -mt-8">
        <img src={brokerim} className="w-3/5"/>
       </div>


       <div className="flex flex-col  w-11/12 md:w-10/12 mx-auto max-w-6xl justify-center items-center py-16">
        <div className="lg:text-5xl text-lg font-bold">The all-in-one discovery experience</div>
        <div className="lg:text-5xl text-lg font-bold">that’s a real game-changer</div>
       </div>

      <div className="bg-blue-100 mt-8 lg:mt-24 pb-6">
        <div className=" w-11/12 md:w-10/12 mx-auto max-w-6xl flex flex-col gap-2 justify-center items-center py-24 lg:py-32 pb-0">
          <div className="lg:text-5xl text-2xl font-bold">What is Middle for brokers?</div>
          <div className="text-lg pl-5 lg:pl-0">Middle is an easier, faster and more efficient way for brokers to collect client</div>
          <div className="text-lg">data, and for clients to hand it over.</div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 pb-4 mt-7 lg:-mt-8 w-11/12 md:w-10/12 mx-auto max-w-6xl">
            <span className="font-bold text-2xl p-2 rounded-2xl text-center bg-blue-950 text-white ">🙎‍♂️ Comprehensive client profile</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">😄 Exceptional client experience</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">🏫 Property insights</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">💵 Client finances without the fuss</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">💳 Liabilities and credit history</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">💫 Insights engine</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white">📝 Centralised document collection</span>
            <span className="font-bold text-2xl  p-2 rounded-2xl text-center bg-blue-950 text-white ">🧨 One click to aggregators</span>
          </div>
      </div>

      <div>
      <div className="lg:text-5xl text-2xl text-center  py-32 font-bold">What is Middle for brokers?</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 -mt-12 lg:mt-0  w-11/12 mx-auto md:w-10/12 max-w-6xl gap-y-12 lg:gap-x-12">

      <div className="flex flex-col items-center ">
      <img src={brokerfr} className="w-64"/>
      <div className=" text-xl lg:text-2xl font-bold flex justify-center text-center">Happier clients</div>
      <div className="text-[18px] lg:text-lg font-normal text-center">Make applying for a home loan less stressful by radically reducing your clients’ prep time and paperwork.</div>
      </div>
      <div className="flex flex-col items-center ">
      <img src={brokerse} className="w-64"/>
      <div className=" text-xl lg:text-2xl font-bold flex justify-center text-center">Digitise overnight</div>
      <div className="text-[18px] lg:text-lg font-normal text-center">Our advanced digital identification, financial verification, and document collection capability will transform the way you do business.</div>

      </div>
      <div className="flex flex-col items-center ">
      <img src={brokerth} className="w-64"/>
      <div className=" text-xl lg:text-2xl font-bold flex justify-center text-center">Smarter not harder</div>
      <div className="text-[18px] lg:text-lg font-normal text-center">Every hour saved from collecting, processing and analysing data is an opportunity gained elsewhere. Less manual effort for the win!</div>

      </div>
      </div>

      </div>



<div className="max-w-6xl mx-auto w-11/12 md:w-10/12 rounded-2xl bg-gray-200 grid grid-cols-1 lg:grid-cols-2 mt-36 pb-12 mb-10 lg:mb-16">
  <div className=" flex flex-col justify-center gap-10 p-6 ">
    <div className=" text-4xl lg:text-5xl font-bold">How about a demo?</div>
    <div>See first hand what Middle can do for your business.</div>
    <div className="-mt-10">We’re here for any questions too.</div>
    <Link to="/contact" ><button className="bg-black text-white p-3 rounded-lg">Get in touch</button></Link>
  </div>
  <div className="p-6">
  <img src={brokerho} className="w-5/6"/>
  </div>
</div>





<Footers/>
    </div>
   
  )
}

export default Brokers