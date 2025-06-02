// "use client"
// import { Mail, Phone } from 'lucide-react'
// import React, { useState } from 'react'

// const ContactForm = () => {

//     const [formData, setFormData] = useState({
//         fullName: "",
//         email: "",
//         phoneNumber:"",
//         message:"",
//         company:"",
//         interest:"",

//       });

//   return (
//     <div className="max-w-lg mx-auto mt-20  rounded-xl pb-8 pt-8 border border-gray-300 shadow-[-12px_12px_0px_#bfdbfe"> 
//      <div className='mt-2'>
//         <h1 className='mb-4 ml-5'>Contact Form</h1>
//         <div className='ml-5 flex flex-row'>
//        <div className=' mr-3'><Phone/> Toll free 800 Kps</div>
//        <div className='ml-3'> <Mail />  Hello@kpsworld.com</div>



//         </div>

//         <form className='space-y-8'>
//                  <div className=' ml-3 mb-1'>
//                     <div>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="text"
//                   placeholder='I am currently interested in****'
//                   value={formData.interest}
//                   onChange={(e)=>{
//                     setFormData({...formData,interest:e.target.value})
//                   }}

//                 />
//                      </div>


//             <div className='flex flex-row'>
//             <div className='p-2 justify-between'>
//             <div className='mb-4'>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="text"
//                   placeholder='Full Name****'
//                   value={formData.fullName}
//                   onChange={(e)=>{
//                     setFormData({...formData,fullName:e.target.value})
//                   }}

//                 />


//             </div>

//                <div>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="email"
//                   placeholder='Phone Number****'
//                   value={formData.phoneNumber}
//                   onChange={(e)=>{
//                     setFormData({...formData,phoneNumber:e.target.value})
//                   }}

//                 />


//             </div>
//             </div>

//              <div className='p-2 justify-between'>
//             <div className='mb-4'>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="text"
//                   placeholder='Email Address****'
//                   value={formData.email}
//                   onChange={(e)=>{
//                     setFormData({...formData,email:e.target.value})
//                   }}

//                 />


//             </div>

//                <div>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="email"
//                   placeholder='Company****'
//                   value={formData.company}
//                   onChange={(e)=>{
//                     setFormData({...formData,company:e.target.value})
//                   }}

//                 />


//             </div>
//             </div>
//          </div>
//            <div>
//                 <input
//                 className='underline'
//                 id="interest"
//                  type="text"
//                   placeholder='I am currently interested in****'
//                   value={formData.interest}
//                   onChange={(e)=>{
//                     setFormData({...formData,interest:e.target.value})
//                   }}

//                 />
//                      </div>
//          </div>
//         </form>


//      </div>





//     </div>
//   )
// }

// export default ContactForm


"use client"

import { Mail, Phone } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function ContactForm() {

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const reponse = await fetch()
      // if(response){
      //     toast.success("Contact Form submitted successfullyl")
      // }
    } catch (error) {
      console.error("Error submitting contact ", error)
      toast.error("Error submitting contactform")
    }
  }
  return (
    <div className=" border-black bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        {/* <button className="absolute top-4 right-4 text-gray-700 text-2xl">&times;</button> */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact us</h2>

        <div className="flex items-center gap-4 text-gray-700 mb-6">
          <span className="flex items-center gap-1">
            <Phone />
            Toll free 800 KPS
          </span>
          <span className="flex items-center gap-1">
            <Mail />
            <a href="mailto:Hello@kpsworld.com">Hello@kpsworld.com</a>
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">



          <div>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="I am interested in" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="world1">World1</SelectItem>
                <SelectItem value="world2">World2</SelectItem>
                <SelectItem value="world3">World3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name******" className="border-b border-gray-300 focus:outline-none p-2" />
            <input type="text" placeholder="Phone number******" className="border-b border-gray-300 focus:outline-none p-2" />
            <input type="email" placeholder="Email address******" className="border-b border-gray-300 focus:outline-none p-2" />
            <input type="text" placeholder="Company******" className="border-b border-gray-300 focus:outline-none p-2" />
          </div>

          <div>
            <textarea placeholder="Message / enquiry******" className="w-full border-b border-gray-300 focus:outline-none p-2" rows={2} maxLength={100}></textarea>
          </div>

          <div className="flex items-center gap-4">
            <button type="submit" className="border px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100">SEND</button>
            <span className="text-xs text-gray-500">By submitting this form you agree to our <a href="#" className="underline">Privacy Policy</a></span>
          </div>
        </form>
      </div>
    </div>
  );
}
