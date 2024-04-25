import React, { useEffect } from "react";
import firim from "../assets/first image.webp";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import cf from "../assets/cartoonfirst.png";
import cs from "../assets/cartoonsecond.png";
import ct from "../assets/cartoonthird.png";
import cfo from "../assets/cartoonfourth.png";
import si from "../assets/secondimage.jpg";
import ti from "../assets/thirdimage.webp";
import foi from "../assets/fourthimage.webp";
import fif from "../assets/fifthimage.webp";
import eli from "../assets/eleventhimage.png";
import twi from "../assets/twelveimage.webp";
import Header from "./Header";
import Footers from "./Footers";
import sixth from "../assets/sixthimage.webp";
import seventh from "../assets/seventhimage.webp";
import eight from "../assets/eightimage.png";
import ninth from "../assets/ninthimage.png";
import tenth from "../assets/tenthimage.webp";

import newfirstanimation from "../assets/newfirstanimation.gif";
import newsecondanimation from "../assets/newsecondanimation.gif"


function Customers() {
  const [accone, setacc] = useState([false, false, false, false, false]);
  function acchandler(accNo) {
    const newArr = [false, false, false, false, false];
    newArr[accNo] = !accone[accNo];
    setacc(newArr);
  }

  const accData = [
    {
      head: "What is Middle? ◢",
      para: "Middle allows you to securely share all the details your Broker needs to provide you with the best home loan advice, all in minutes. This means no paper forms, no sharing personal information via emails and no having to sneak out during your lunch break to get your home loan process started!",
    },
    {
      head: "Can I trust Middle? ◢",
      para: "Put simply, yes. We understand the importance of trust and the role it plays in the end-to-end home loan process. There is nothing more important to us than data safety and privacy. We only use Australian-based data facilities, the best encryption services and will never sell your data to anyone, ever. Further information is available via our  Privacy Policy.",
    },
    {
      head: "How do I use Middle? ◢",
      para: "Ask your broker if they are using Middle, and simply keep an eye on your inbox for your Middle invitation. From there, just follow the prompts to provide all the information your Broker needs to get your home loan application started! You can use Middle from anywhere in Australia on your laptop, mobile or tablet!",
    },
    {
      head: "Do I have to pay to use Middle? ◢",
      para: "For you, Middle is free, since your Broker has already signed up. All you have to do is keep an eye out for the email invitation!",
    },
    {
      head: "What if my broker doesn’t use Middle? ◢",
      para: "Middle is currently only available to select Brokers. Get in touch with us if you would like us to connect you with a Broker using Middle!",
    },
  ];

  const newdata = [
    {
      step: "Step 1",
      heading: "You’re invited",
      description: "Hit the secure link your broker provides to access Middle",
      src: sixth,
    },
    {
      step: "Step 2",
      heading: "The property and you",
      description:
        "Answer a few easy questions and complete our on-the-spot digital identity check",
      src: seventh,
    },
    {
      step: "Step 3",
      heading: "Your financial situation",
      description:
        "Make a one-time secure connection to your bank to add your finances.",
      src: eight,
    },
    {
      step: "Step 4",
      heading: "Review and preferences      ",
      description: "Check your finances and confirm your loan preferences. ",
      src: ninth,
    },
    {
      step: "Step 5",
      heading: "Upload and submit      ",
      description:
        "Upload your supporting documents and, from there, it’s over to your broker we go!      ",
      src: tenth,
    },
  ];
  const [d, setd] = useState(0);
  function prevHandler() {
    d === 0 ? setd(4) : setd(d - 1);
  }
  function nextHandler() {
    d === 4 ? setd(0) : setd(d + 1);
  }
  useEffect(() => {
    Aos.init();
  }, []);
  const [showmore, setshowmore] = useState(false);
  function showmorehandler() {
    setshowmore(!showmore);
  }

  return (
    <div>
      <Header />
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto md:w-10/12 max-w-6xl lg:py-20   justify-center">
          <div
            className="w-11/12 mx-auto md:w-10/12 max-w-6xl"
            data-aos="fade-up"
          >
            <span className=" text-4xl lg:text-6xl font-bold text-center sm:text-left relative z-50 ">
              Middle, helping you {" "}
            </span>
            <span
              className="text-4xl lg:text-6xl font-bold"  data-aos="fade-up"
              style={{
                backgroundImage: `url(${newfirstanimation})`,
                backgroundSize: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                width: "10rem",
                paddingTop:"3rem",

              }
              }

            >
              home
            </span>
            <div className="py-8 text-lg font-normal" data-aos="fade-up">
              Slash the mortgage admin with Middle. Deliver everything your
              broker needs in minutes.
            </div>
            <div
              className=" text-[18px] lg:text-lg font-normal"
              data-aos="fade-up"
            >
              Don't have a Middle invite?
              <button onClick={showmorehandler} data-aos="fade-up">
                ☢
              </button>
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto md:w-10/12 max-w-6xl py-8 lg:py-0">
              <img src={firim} />
            </div>
          </div>
          <div
            className={` bg-gray-100 text-black p-4 absolute bottom-0 left-1/4 py-10 ${
              showmore ? "block" : "hidden"
            }`}
          >
            😉 <b>Don’t have a Middle invite?</b>
            <br></br>Currently Middle is only available<br></br> through select
            brokers. To find a broker <br></br>using Middle, get in touch with
            us!
          </div>
          <div className=""
           style={{
                backgroundImage: `url(${newsecondanimation})`,
                backgroundSize: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                width: "10rem",
                paddingTop:"10rem",

              }
              }

          ></div>
        </div>
        <div className=" bg-gray-200 lg:-mt-20 flex   " data-aos="zoom-in">
          <div className="ml-8 hidden md:block">
            <div className="animate-bounce w-32">
              <img src={cf} />
            </div>
            <div className="animate-bounce w-24 ml-14">
              <img src={cs} />
            </div>
            <div className="animate-bounce w-20 ml-2">
              <img src={ct} />
            </div>
            <div className="animate-bounce w-20 ml-20">
              <img src={cfo} />
            </div>
          </div>
          <div className="text-3xl lg:text-5xl font-bold flex flex-col  lg:ml-48 items-center justify-center sm:text-left">
            <span className="hidden md:block">Minutes not days,</span>
            <span className=" hidden md:block ml-8 lg:ml-0">
              that’s all it takes with Middle
            </span>
          </div>
          <div className=" hidden lg:block ml-[9.6rem]">
            <div className="animate-bounce w-32">
              <img src={cf} />
            </div>
            <div className="animate-bounce w-24 ml-14">
              <img src={cs} />
            </div>
            <div className="animate-bounce w-20 ml-2">
              <img src={ct} />
            </div>
            <div className="animate-bounce w-20 ml-20">
              <img src={cfo} />
            </div>
          </div>
          <div className="text-3xl lg:text-5xl font-bold flex flex-col  items-center justify-center">
            <span className="block md:hidden ml-8">Minutes not days,</span>
            <span className=" block md:hidden ml-8 lg:ml-0">
              that’s all it takes with Middle
            </span>
          </div>

          <div className="">
            <div className="animate-bounce w-32  block lg:hidden">
              <img src={cf} />
            </div>
            <div className="animate-bounce w-24 ml-14  block lg:hidden">
              <img src={cs} />
            </div>
            <div className="animate-bounce w-20 ml-2  block lg:hidden">
              <img src={ct} />
            </div>
            <div className="animate-bounce w-20 ml-20  block lg:hidden">
              <img src={cfo} />
            </div>
          </div>
        </div>

        <div className="py-20 lg:py-36">
          <div className=" text-3xl lg:text-5xl font-bold text-center ">
            What is Middle for borrowers?
          </div>
          <div className="text-[18px] lg:text-lg font-normal text-center py-8 ">
            Middle lets you securely share all the details your Broker needs in
            minutes, so they can provide you with the best home loan advice.
          </div>
        </div>

        <div
          className="flex items-center justify-center -mt-24"
          data-aos="fade-right"
        >
          <img src={si} />
        </div>

        <div className=" text-3xl lg:text-5xl font-bold text-center mt-12 lg:mt-20">
          What borrowers love about Middle
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 py-14  w-11/12 mx-auto md:w-10/12 max-w-6xl gap-y-12 lg:gap-x-12">
          <div className="flex flex-col items-center ">
            <img src={ti} className="w-64" />
            <span className=" text-xl lg:text-2xl font-bold flex justify-center text-center">
              Put your best foot forward
            </span>
            <span className=" text-[18px] lg:text-lg font-normal text-center">
              Middle removes the guesswork by organising and sharing all the
              information your broker needs to recommend the best home loan for
              your situation.
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <img src={foi} className="w-64" />
            <span className=" text-xl lg:text-2xl font-bold flex justify-center text-center">
              Slash the admin
            </span>
            <span className=" text-[18px] lg:text-lg font-normal text-center">
              Get your mortgage journey moving with less admin stress. Best of
              all, it only takes 15 minutes to deliver everything your broker
              needs.
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <img src={fif} className="w-64" />
            <span className=" text-xl lg:text-2xl font-bold flex justify-center text-center">
              Serious about security
            </span>
            <span className="text-[18px] lg:text-lg font-normal text-center">
              Rest easy knowing all of the data you share is safe within our
              highly secure environment.
            </span>
          </div>
        </div>

        <div className=" text-center w-11/12 mx-auto md:w-10/12 max-w-6xl py-4 lg:py-16">
          <span className=" text-4xl lg:text-5xl font-bold text-center sm:text-left relative z-50 ">
            How middle &nbsp;
          </span>
          <span
            className="text-4xl lg:text-5xl font-bold"
            data-aos="fade-up"
            style={{
                backgroundImage: `url(${newfirstanimation})`,
                backgroundSize: "center",
                backgroundRepeat:"no-repeat",
                backgroundSize: "cover",
                width: "10rem",
                paddingTop:"4rem",

              }
              }
           
          >
            works
          </span>
        </div>
        <div className="bg-gray-200 text-center">
          <div className="grid lg:grid-cols-2">
            <div className=" w-11/12 mx-auto md:w-10/12 max-w-6xl lg:mt-20 lg:pl-28">
              <img src={newdata[d].src} className="w-96" />
            </div>
            <div className="lg:mt-44 lg:-ml-44">
              <p className="text-xl ">{newdata[d].step}</p>
              <p className="text-3xl py-2 font-semibold">
                {newdata[d].heading}
              </p>
              <p className="text-xl py-2">{newdata[d].description}</p>
              <div className="flex justify-center gap-x-12 py-4">
                <button
                  className="bg-white rounded-full text-3xl"
                  onClick={prevHandler}
                >
                  ﹤
                </button>

                <button
                  className="bg-white rounded-full text-3xl"
                  onClick={nextHandler}
                >
                  {" "}
                  ﹥{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16 lg:mt-32">
          <img src={eli} />
        </div>

        <div className="w-11/12 mx-auto md:w-10/12 max-w-6xl grid lg:grid-cols-2 py-14 lg:py-24 pb-0">
          <div className="">
            <img src={twi} className=" w-72 lg:w-5/6  " />
          </div>

          <div className=" flex flex-col gap-y-4 py-12 lg:py-0 lg:pb-0">
            <div className=" text-2xl lg:text-4xl font-extrabold">
              Frequently Asked Questions
            </div>
            <div onClick={() => acchandler(0)} className="">
              <button className="text-black font-bold text-xl lg:text-2xl bg-blue-200 rounded-xl p-2 border-l-8 border-blue-900">
                {accData[0].head}
              </button>
              <p className="lg:text-lg text-base bg-blue-100 rounded-xl">
                {accone[0] ? accData[0].para : ""}
              </p>
            </div>
            <div onClick={() => acchandler(1)}>
              <button className="text-black font-bold text-xl lg:text-2xl bg-blue-200 rounded-xl p-2 border-l-8 border-blue-900">
                {accData[1].head}
              </button>
              <p className="lg:text-lg text-base bg-blue-100 rounded-xl">
                {accone[1] ? accData[1].para : ""}
              </p>
            </div>
            <div onClick={() => acchandler(2)}>
              <button className="text-black font-bold text-xl lg:text-2xl bg-blue-200 rounded-xl p-2 border-l-8 border-blue-900">
                {accData[2].head}
              </button>
              <p className="lg:text-lg text-base bg-blue-100 rounded-xl">
                {accone[2] ? accData[2].para : ""}
              </p>
            </div>
            <div onClick={() => acchandler(3)}>
              <button className="text-black font-bold text-xl lg:text-2xl bg-blue-200 rounded-xl p-2 border-l-8 border-blue-900">
                {accData[3].head}
              </button>
              <p className="lg:text-lg text-base bg-blue-100 rounded-xl">
                {accone[3] ? accData[3].para : ""}
              </p>
            </div>
            <div onClick={() => acchandler(4)}>
              <button className="text-black font-bold text-xl lg:text-2xl bg-blue-200 rounded-xl p-2 border-l-8 border-blue-900">
                {accData[4].head}
              </button>
              <p className="lg:text-lg text-base bg-blue-100 rounded-xl">
                {accone[4] ? accData[4].para : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
}

export default Customers;
