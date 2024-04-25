import React from 'react';
import newlogo from "../assets/newlogo.png";
import { Link } from 'react-router-dom'


function Footers() {
  return (
    <div className=" bg-black">
    <div className="bg-black grid grid-cols-1 lg:grid-cols-4 w-11/12 md:w-10/12 mx-auto max-w-6xl p-16  gap-9  ">
    
        <div className="">
        <Link to="/"><button className="lg:w-28 w-24"><img src={newlogo}/></button></Link> 
        <div className="text-white text-base">Join the revolution and see how easy Middle makes home loans.</div>
        </div>
        
        <div className="flex flex-col gap-y-3  items-center ">
       <Link> <button className="text-white font-semibold text-lg">Company</button></Link>
       <Link to="/contact"> <button className="text-white text-base">Contact</button></Link>
        <Link><button className="text-white text-base">Security</button></Link>
       
        </div>
        
        <div className="flex flex-col gap-y-3  items-center">
        <Link><button className="text-white font-semibold text-lg">Who we help</button></Link>
        <Link to="/"><button className="text-white text-base">Customers</button></Link>
       <Link to="/brokers"> <button className="text-white text-base">Brokers</button></Link>

        <Link to="/lenders"><button className="text-white text-base">Lenders</button></Link>

      
        </div>
        <div className="flex flex-col gap-y-3 items-center">
        <Link><button className="text-white font-semibold text-lg">Follow Us</button></Link>
        <Link to="https://www.linkedin.com/" ><button className="text-white text-base">Linkedin</button></Link>
        
      </div>
  

       
    </div>
    <div className="flex lg:justify-between  pb-8 flex-col lg:flex-row w-11/12  max-w-7xl mx-auto md:w-10/12 ">
            <div className="text-white text-sm lg:text-base ">Copyright @ 2023 Middle Technology Australia | ABN 99 649 575 315 | Australian Credit Licence 536443</div>
            <div className="text-white lg:text-base hidden lg:block">Privacy Policy.Privacy Collection Notice.Terms</div>
        </div>
    </div>
  )
}

export default Footers
