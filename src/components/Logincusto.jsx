import React from 'react'
import logo from '../assets/logonew.svg'
import { Link } from 'react-router-dom'
import custohouse from "../assets/custohouse.avif";

function Logincusto() {
  return (
    <div className=" w-full h-screen "
       style={{
                backgroundImage: `url(${custohouse})`,
                backgroundSize: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                width: "rem",
                paddingTop:"rem",

              }
              }>
    
    <Link  to="/logincusto">
        <div className="lg:w-28 w-24 py-11 pl-5"><img src={logo} /></div></Link>
        <div className="text-4xl font-semibold lg:pl-32 pl-6 py-24 pb-5">Login to Middle</div>
        <div className="text-lg lg:pl-32 pl-6 ">If you don’t have an account, you can sign up here. We’ll email</div>
        <div  className="text-lg lg:pl-32 pl-6 ">you a magic code for a password-free experience.</div>
        <form className="lg:pl-32 py-6 pl-6" ><label>
          <input type="email" placeholder="Enter Your Email" className="p-2 outline-1 outline-purple-500 "></input>
        </label></form>
       <div className="lg:pl-32 pl-6"> <button className="text-lg text-white bg-black p-3 pl-16 pr-16 rounded-xl ">Next</button></div>

        </div>
    
  )
}

export default Logincusto