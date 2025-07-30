import { MailIcon, MapPin, PhoneCallIcon, PhoneIncoming } from "lucide-react";
import Image from "next/image";
import ContactForm from "./contactform";

export default function ContactPage() {
  return (
    <main>
      {/* Enhanced Contact Hero Section */}
      <section className="relative h-[100vh] bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact.jpg"
            alt="AIMTERIOR Contact"
            fill
            className="object-cover opacity-30"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-red-900/75 to-pink-900/70"></div>
          {/* Contact Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/3 w-40 h-40 border-2 border-white rotate-12 animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white rotate-45"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Contact Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600/20 to-pink-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Let's Connect
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Ready to Transform
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Your Vision?
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100 animate-slide-up-delay">
              Your dream project starts with a conversation. Whether you're
              planning a residential renovation, commercial fit-out, or need
              authority approvals, AIMTERIOR is here to bring your vision to
              life with expertise and precision.
            </p>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delay">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-gray-300">+971 4 352 2142</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-gray-300">info@aimterior.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-sm text-gray-300">Business Bay, Dubai</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay">
              <button className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Free Consultation</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* Floating Contact Elements */}
        <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-30 animate-float-delayed"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-gray-300 mb-2 uppercase tracking-wider">
            Start the Conversation
          </div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gradient-to-b from-orange-400 to-pink-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold uppercase mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between space-y-3">
            <p>
              At AIM, we truly value our clients and would be excited to
              collaborate with you. Reach out for a custom quote or any
              service-related questions, and we will respond promptly.
            </p>
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <MailIcon className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-normal">Email</span>
                <span className="font-semibold">info@luxedesign.ae</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <PhoneCallIcon className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-normal">Phone Number</span>
                <span className="font-semibold">04 448 3328</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <PhoneIncoming className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-normal">WhatsApp Number</span>
                <span className="font-semibold">058 896 8000</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className=" font-normal">Office</span>
                <span className="font-semibold">
                  Opal Tower - Business Bay - Dubai
                </span>
              </div>
            </div>
          </div>

          {/* <ContactCard /> */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
