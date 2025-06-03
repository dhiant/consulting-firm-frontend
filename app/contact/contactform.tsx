"use client";

import { Mail, Phone } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const reponse = await fetch()
      // if(response){
      //     toast.success("Contact Form submitted successfullyl")
      // }
    } catch (error) {
      console.error("Error submitting contact ", error);
      toast.error("Error submitting contactform");
    }
  };
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
            <input
              type="text"
              placeholder="Full name******"
              className="border-b border-gray-300 focus:outline-none p-2"
            />
            <input
              type="text"
              placeholder="Phone number******"
              className="border-b border-gray-300 focus:outline-none p-2"
            />
            <input
              type="email"
              placeholder="Email address******"
              className="border-b border-gray-300 focus:outline-none p-2"
            />
            <input
              type="text"
              placeholder="Company******"
              className="border-b border-gray-300 focus:outline-none p-2"
            />
          </div>

          <div>
            <textarea
              placeholder="Message / enquiry******"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              rows={2}
              maxLength={100}
            ></textarea>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="border px-6 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              SEND
            </button>
            <span className="text-xs text-gray-500">
              By submitting this form you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
