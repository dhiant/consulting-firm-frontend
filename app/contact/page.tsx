"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

import Image from "next/image";
import { MailIcon, MapPin, PhoneCallIcon, PhoneIncoming } from "lucide-react";

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main>
      <section className="relative h-[70vh] bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/contact.jpg "
            alt="Interior Design Showcase"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            loading="eager"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Have any questions?</h1>
          <p className="text-xl mb-8">
            Our team is available 24/7 to assist you with any inquiries.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 uppercase">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between space-y-3">
            <p>
              We value our clients and would be delighted to have you as one.
              Please reach out to us for a personalized quote or any inquiries
              about our services. Rest assured, we will respond promptly to your
              message.
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
                <span className=" font-normal">Project Office</span>
                <span className="font-semibold">
                  Opal Tower - Business Bay - Dubai
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 text-white cursor-pointer rounded-full">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="flex flex-col">
                <span className=" font-normal">Project Office</span>
                <span className="font-semibold">
                  Opal Tower - Business Bay - Dubai
                </span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below to reach out to us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(123) 456-7890" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
          {/* <Card>
            <CardHeader>
              <CardTitle>Book a Consultation</CardTitle>
              <CardDescription>
                Choose a date for your design consultation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Schedule Consultation</Button>
            </CardFooter>
          </Card> */}
        </div>
      </div>
    </main>
  );
}
