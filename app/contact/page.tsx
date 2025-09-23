import { MailIcon, MapPin, PhoneCallIcon, PhoneIncoming } from "lucide-react";
import Image from "next/image";
import ContactForm from "./contactform";
import ScrollIndicator from "@/components/scroll-indicator";

export default function ContactPage() {
  return (
    <main>
      {/* Enhanced Contact Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact.png"
            alt="AIMTERIOR Contact"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          {/* Contact Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/3 w-40 h-40 border-2 border-white rotate-12 animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white rotate-45"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="text-left max-w-4xl">
            {/* Contact Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-brand-50 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-brand-100 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  {"Let's Connect"}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-slide-up">
              Ready to Transform
              <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
                Your Vision?
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-3xl leading-relaxed text-gray-100 animate-slide-up-delay">
              Your dream project starts with a conversation. Whether you&apos;re
              planning a residential renovation.
            </p>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col sm:flex-row gap-6 justify-start animate-fade-in-delay">
              <button className="bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Free Consultation</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 sm:px-10 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105">
                Schedule Site Visit
              </button>
            </div>

            {/* Quick Contact Options */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delay">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <PhoneCallIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-sm text-gray-300">+971 4 352 2142</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MailIcon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-gray-300">info@aimterior.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-sm text-gray-300">Business Bay, Dubai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Elements */}
        <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-brand-50 to-brand-400 rounded-full opacity-30 animate-float-delayed"></div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
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
                <span className="font-semibold">info@aimterior.com</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <PhoneCallIcon className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-normal">Phone Number</span>
                <span className="font-semibold">048878015</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <PhoneIncoming className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-normal">WhatsApp Number</span>
                <span className="font-semibold">+971 50 120 4990</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white hover:text-black cursor-pointer rounded-full">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className=" font-normal">Office</span>
                <span className="font-semibold">SM1-02-713, Dubai, UAE</span>
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
