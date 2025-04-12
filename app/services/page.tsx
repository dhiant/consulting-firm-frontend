"use client";
import Image from "next/image";
import {
  Bolt,
  Boxes,
  BrickWall,
  Construction,
  Drill,
  Hammer,
  HardHat,
  Pickaxe,
  Wrench,
} from "lucide-react";
import { DraftingCompass, Cable, Landmark } from "lucide-react";
import {
  Building2,
  Home,
  Warehouse,
  ShoppingBag,
  Trees,
  PanelsTopLeft,
} from "lucide-react";
import ServiceList from "./components/service-list";

const authorityApprovalsData = [
  {
    title: "Civil Defense Approval",
    description:
      "Get hassle-free Civil Defense Approval in Dubai with our expert consultancy services.",
    icon: Construction,
  },
  {
    title: "DEWA Approval",
    description:
      "Expert assistance for obtaining DEWA Approval for your projects in Dubai.",
    icon: BrickWall,
  },
  {
    title: "DSO Approval",
    description:
      "Simplified Dubai Silicon Oasis (DSO) Approval process with professional guidance.",
    icon: Drill,
  },
  {
    title: "Dubai Development Authority Approval",
    description:
      "Professional services to secure Dubai Development Authority (DDA) Approvals quickly.",
    icon: Hammer,
  },
  {
    title: "Dubai Municipality Approval",
    description:
      "Smooth and efficient Dubai Municipality Approval services for your projects.",
    icon: HardHat,
  },
  {
    title: "Emaar Approval",
    description:
      "Get Emaar Approval for your projects with our streamlined consultancy solutions.",
    icon: Pickaxe,
  },
  {
    title: "Food Control Department Approval",
    description:
      "Ensure compliance with Food Control Department standards and get quick approvals.",
    icon: Wrench,
  },
  {
    title: "JAFZA Approval",
    description:
      "Obtain Jebel Ali Free Zone Authority (JAFZA) Approval with ease through our services.",
    icon: Bolt,
  },
  {
    title: "Nakheel Approval",
    description:
      "Professional assistance for Nakheel Approval for your residential or commercial projects.",
    icon: Construction,
  },
  {
    title: "Sand Transfer Permit",
    description:
      "Quick and reliable Sand Transfer Permit approvals for your construction needs.",
    icon: BrickWall,
  },
  {
    title: "Shisha Cafe License Dubai",
    description:
      "Obtain your Shisha Cafe License in Dubai with expert consultancy services.",
    icon: Drill,
  },
  {
    title: "Signage Approval",
    description:
      "Get your signage approved in Dubai with our hassle-free consultancy services.",
    icon: Hammer,
  },
  {
    title: "Smoking Permit",
    description:
      "Secure a Smoking Permit in Dubai with professional assistance.",
    icon: HardHat,
  },
  {
    title: "SPA Approval",
    description:
      "Expert services to obtain SPA Approval for your wellness center in Dubai.",
    icon: Pickaxe,
  },
  {
    title: "Swimming Pool Approval",
    description:
      "Simplify your Swimming Pool Approval process with our expert consultancy.",
    icon: Wrench,
  },
  {
    title: "TECOM and DCCA Approval",
    description:
      "Efficient TECOM and Dubai Creative Clusters Authority (DCCA) Approval services.",
    icon: Bolt,
  },
  {
    title: "Third Party Consultants Approval",
    description:
      "Professional guidance for obtaining Third Party Consultants Approval in Dubai.",
    icon: Construction,
  },
  {
    title: "Trakhees Approval",
    description:
      "Get Trakhees Approval for your project with our experienced consultants.",
    icon: BrickWall,
  },
  {
    title: "RTA Permit and Approval",
    description:
      "Expert assistance for obtaining RTA permits and approvals in Dubai.",
    icon: Drill,
  },
  {
    title: "Solar Approval",
    description:
      "Professional consultancy for acquiring Solar Approval for your renewable energy projects.",
    icon: Hammer,
  },
  {
    title: "Tent Approval",
    description:
      "Secure Tent Approval in Dubai for your event or project with ease.",
    icon: HardHat,
  },
  {
    title: "DHA Approval",
    description:
      "Get Dubai Health Authority (DHA) Approval with expert guidance for your healthcare project.",
    icon: Pickaxe,
  },
  {
    title: "Property Snagging and Inspection",
    description:
      "Ensure quality and compliance with our Property Snagging and Inspection services in Dubai.",
    icon: Wrench,
  },
];

const planningandDrawingsData = [
  {
    title: "Architecture Drawings",
    description:
      "Detailed floor plans, elevations, and sections that bring your architectural vision to life with precision and clarity.",
    icon: DraftingCompass,
  },
  {
    title: "MEP Drawings",
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing layouts to ensure efficiency, safety, and compliance in your building systems.",
    icon: Cable,
  },
  {
    title: "Structural Drawings",
    description:
      "Engineering-based diagrams outlining the framework and load-bearing systems that form the foundation of your construction.",
    icon: Landmark,
  },
  {
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders and walkthroughs to help you visualize your space before it’s built, enhancing design decisions.",
    icon: Boxes,
  },
];

const fitoutWorksData = [
  {
    title: "Commercial",
    description:
      "Office and business space fitouts tailored for productivity and branding.",
    icon: Building2,
  },
  {
    title: "Residential",
    description:
      "Custom home interiors blending comfort, function, and aesthetics.",
    icon: Home,
  },
  {
    title: "Warehouse",
    description:
      "Functional warehouse interiors built for storage and workflow efficiency.",
    icon: Warehouse,
  },
  {
    title: "Retail",
    description:
      "Engaging retail spaces designed to enhance customer experience and sales.",
    icon: ShoppingBag,
  },
  {
    title: "Landscaping",
    description:
      "Outdoor designs that connect nature with built environments beautifully.",
    icon: Trees,
  },
  {
    title: "Racking Installation",
    description:
      "Optimized storage systems for organized, high-capacity solutions.",
    icon: PanelsTopLeft,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative h-[70vh] text-white bg-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/images/services.jpg"
            alt="Service Image"
            layout="fill"
            className="opacity-50"
            objectFit="cover"
            loading="eager"
          />
        </div>
      </section>
      <div className="container max-w-screen-xl mx-auto px-4 pt-16">
        <ServiceList
          data={authorityApprovalsData}
          title={"Authority Approvals"}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-5">
        <ServiceList
          data={planningandDrawingsData}
          title={"Plannings and Drawings"}
          enableSearch={false}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 pb-16">
        <ServiceList
          data={fitoutWorksData}
          title={"Fitout works | Build"}
          enableSearch={false}
        />
      </div>
    </main>
  );
}
