"use client";
import { MoveRight } from "lucide-react";

import { useRouter } from "next/navigation";

export default function ServiceContext() {
  const router = useRouter();
  return (
    // <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white my-12 mx-4">
    <div className="bg-[#0D1B2A] border text-white my-12 mx-4">
      <div className="container mx-auto px-4 py-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              The AIM Approach
            </h3>
            <p className="text-white text-md leading-relaxed">
              Turning Concepts into Built Realities
            </p>
            {/* Social Media Icons */}
          </div>

          <div className=" mr-3 border-r-2 border-white/20 ">
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              Authority Approval
            </h4>
            <ul className="space-y-3 text-md">
              <li className="flex items-start">
                Start the Authority Approval process with us. With our in-depth
                knowledge of local regulations, we’ll handle submitting your
                drawings to the authorities and secure the necessary permits to
                begin your project. We’ll guide you through the entire approval
                process, ensuring your project complies with all regulations and
                securing the necessary approvals to move forward.
              </li>
            </ul>
          </div>

          <div className=" border-r-2 border-white/20">
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              Planning and Design
            </h4>
            <ul className="space-y-3  text-md">
              <li className="flex items-start">
                Embark on the Design and Drawings phase with us. We’ll
                collaborate closely to create detailed plans that bring your
                vision to life. Our experienced team ensures each design is
                aesthetically pleasing and fully compliant with authority
                requirements, setting the stage for a smooth and successful
                project.
              </li>
            </ul>
             
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide">
              Fit-out-Build
            </h4>
            <ul className="space-y-3 text-md">
              <li className="flex items-start">
                Begin the Fit-Out and Build phase with us. Our skilled team will
                transform your design into a fully realized space, managing
                every stage of construction with care and expertise. We focus on
                craftsmanship and efficiency to deliver a final product that
                meets your vision and stands the test of time.
              </li>
            </ul>

            
          </div>
        </div>
        <div className="flex  justify-center space-x-4">
          <button
            onClick={() => router.push("/contact")}
            className="border p-3 px-5 mt-12 flex flex-row  "
          >
            Contact US <MoveRight className="ml-2" />
          </button>
        </div>
      
      </div>
    </div>
  );
}
