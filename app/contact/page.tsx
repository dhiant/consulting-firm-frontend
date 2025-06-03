import { MailIcon, MapPin, PhoneCallIcon, PhoneIncoming } from "lucide-react";
import ContactForm from "./contactform";

export default function ContactPage() {
  return (
    <main>
      <section className="relative h-[10vh] bg-primary to-white text-white flex justify-between items-center">
        <div className="container mx-auto max-w-screen-xl">
          {/* <div className="absolute inset-0">
            <Image
              src="/images/contact.jpg"
              alt="Consturction Site Showcase"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
              loading="eager"
            />
          </div> */}
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            {/* <h1 className="text-5xl font-bold mb-4">Transform Your Space</h1>
            <p className="text-xl mb-8">
              Innovative designs that reflect your style and enhance your life.
            </p> */}
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
