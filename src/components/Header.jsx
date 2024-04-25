import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logonew.svg";
import { useState } from "react";

export default function Header() {
  const [shwmore, setshwmore] = useState(false);
  function shwmorehandler() {
    setshwmore(!shwmore);
  }
  return (
    <div className="py-4 lg:py-0">
      <div className="w-11/12  max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 lg:gap-12 md:gap-8 items-center justify-between">
          <Link to="/">
            <div className="lg:w-28 w-24">
              <img src={logo} />
            </div>
          </Link>
          <Link to="/">
            <button className="text-lg hover:text-purple-500 py-9 underline hidden md:block">
              🧑🏽‍❤️‍💋‍🧑🏻 Customers
            </button>
          </Link>
          <Link to="/brokers">
            <button className="text-lg hover:text-purple-500 underline py-9 hidden md:block">
              🕵🏼 Brokers
            </button>
          </Link>
          <Link to="/lenders">
            <button className="text-lg hover:text-purple-500 underline  py-9 hidden md:block">
              🏛️ Lenders
            </button>
          </Link>
        </div>

        <div className="flex gap-4 lg:gap-12 md:gap-8 items-center justify-between">
          <Link to="/contact">
            <button className="text-lg hover:text-purple-500 underline ">
              Contact{" "}
            </button>
          </Link>
          <Link to="">
            <div className="bg-black  py-1.5 px-4 rounded-md hover:bg-purple-500">
              <button onClick={shwmorehandler} className="text-lg text-white ">
                Login
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={` text-black bg-purple-300 rounded-xl lg:rounded-2xl p-[0.3rem] lg:p-4 right-3.5 flex gap-4 lg:gap-0 lg:flex-col lg:-mt-7 lg:mr-8 absolute   ${
          shwmore ? "block" : "hidden"
        }`}
      >
        <Link to="/logincusto">
          <div className="text-black font-semibold    border-black">
            🧑🏽‍❤️‍💋‍🧑🏻 Customers
          </div>
        </Link>
        <Link to="/loginbro" >
          <div className="text-black font-semibold  border-black ">
            🕵🏼 Brokers
          </div>
        </Link>
      </div>
      <div></div>
      <div className="bg-purple-100 block md:hidden mt-6 py-3">
        <div className="flex items-center gap-x-8 md:hidden mx-auto w-11/12 max-w-7xl ">
          <Link to="/">
            <button className="text-lg hover:text-black  underline">
              🧑🏽‍❤️‍💋‍🧑🏻 Customers
            </button>
          </Link>
          <Link to="/brokers">
            <button className="text-lg hover:text-black underline ">
              🕵🏼 Brokers
            </button>
          </Link>
          <Link to="/lenders">
            <button className="text-lg hover:text-black underline ">
              🏛️ Lenders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
