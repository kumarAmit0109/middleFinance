import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logonew.svg";
import newlogincusto from "../assets/newlogincusto.png"

function Loginbro() {
  return (
    <div
      className=" w-full h-screen "
      style={{
                backgroundImage: `url(${newlogincusto})`,
                backgroundSize: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                width: "rem",
                paddingTop:"rem",

              }
              }
    >
      <Link to="/loginbro">
        <div className="lg:w-28 w-24 py-11 pl-5">
          <img src={logo} />
          Broker
        </div>
      </Link>
      <div className="text-4xl font-semibold lg:pl-32 pl-6 py-12 pb-5">
        Login to Middle
      </div>
      <div className="text-lg lg:pl-32 pl-6 ">
        Enter your email to continue. We’ll send a magic code for a
      </div>
      <div className="text-lg lg:pl-32 pl-6 ">password-free experience.</div>
      <form className="lg:pl-32 py-6 pl-6">
        <label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 outline-1 outline-purple-500 "
          ></input>
        </label>
      </form>
      <div className="lg:pl-32 pl-6">
        {" "}
        <button className="text-lg text-white bg-black p-3 pl-16 pr-16 rounded-xl ">
          Next
        </button>
      </div>
      <div className="text-lg font-semibold lg:pl-32 pl-6 py-5">
        ☛ Middle is currently available for select brokers
      </div>
    </div>
  );
}

export default Loginbro;
