import React from 'react'
import twelim from "../assets/twelveimage.webp"
import Header from './Header'
import Footers from './Footers'
function Contact() {
  return (
    <div><Header/>
    <div className="bg-blue-100 mt-16 ">
    <div className="w-11/12 md:w-10/12 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-20">
        <div className="w-11/12 md:w-10/12 mx-auto max-w-6xl flex flex-col gap-y-8">
            <div className=" text-4xl lg:text-5xl font-bold">Contact us</div>
            <div className="text-lg -mt-6">Want to get in touch with us? Sure! Let us know below what you’re looking for and we’ll get back to you.</div>
            <div className='flex flex-col gap-y-1'>
            <div className="text-xl font-bold ">Address</div>
            <div className="text-lg">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            </div>
            <img src={twelim} className="w-96"/>
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto max-w-6xl py-12 flex flex-col gap-y-3 lg:py-0">
          <div className="flex flex-col bg-white p-3 rounded-xl">
            <div className="text-2xl font-semibold">🧑🏽‍❤️‍💋‍🧑🏻 Customers</div>
            <div className="pl-12" >
           <b> Support & enquiries</b><br></br>
               For questions, bugs and suggestions contact us at
                support@xxxx.finance
            </div>
          </div>
          <div className="bg-white flex-col flex  p-3 rounded-xl">
          <div className="text-2xl font-semibold">🕵🏼 Brokers</div>
            <div className="pl-12" >
           <b> Knowledge base</b><br></br>
           Browse FAQs, video demos, and support documentation by logging into the Broker Portal and navigating to Support.
            </div>
            <div className="pl-12 py-6" >
           <b>Broker support</b><br></br>
           For general enquiries, questions, bugs and suggestions contact us at broker-support@xxxx.finance
              </div>
          </div>
          <div>
          <div className="flex flex-col bg-white p-3 rounded-xl">
            <div className="text-2xl font-semibold">🏛️ Lenders</div>
            <div className="pl-12" >
           <b>Enquiries</b><br></br>
           For general enquiries contact us at support@xxxx.finance
            </div>
          </div>
          </div>
          <div className="bg-white flex-col flex  p-3 rounded-xl">
          <div className="text-2xl font-semibold">⏳ General Enquiries & Security</div>
            <div className="pl-12" >
           <b> General enquiries</b><br></br>
           For general enquiries contact us at enquiries@xxxx.finance
            </div>
            <div className="pl-12 py-6" >
           <b>Security</b><br></br>
           For security questions or concerns contact us at
security@xxxx.finance
              </div>
              </div>
        </div>
        </div>
    </div>
    <Footers/>
    </div>
  )
}

export default Contact