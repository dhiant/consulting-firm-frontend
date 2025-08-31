"use client";
import Image from "next/image";
import {
  Anchor,
  Boxes,
  Building,
  Car,
  ChefHat,
  Coffee,
  Container,
  Cpu,
  FileText,
  MoveRight,
  Network,
  Settings,
  Shield,
  Sparkles,
  TreePalm,
  Users,
  Waves,
  Zap,
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
import Link from "next/link";
import ScrollIndicator from "@/components/scroll-indicator";
import { FaRegClipboard } from "react-icons/fa";
import { TbGeometry } from "react-icons/tb";
import { MdConstruction } from "react-icons/md";

const authorityApprovalsData = [
  {
    id: 1,
    title: "Dubai Municipality (DM) Approvals",
    description:
      "Navigating local regulations can be complex — but we're here to make the process simple and seamless.\n\nWe work closely with **Dubai Municipality (DM)** to ensure that your project complies with all applicable regulations and obtains the required approvals. As your trusted partner, our experienced team handles every step of the application and coordination process, so you can focus on what matters most — bringing your vision to life.\n\nWhether you're launching a new facility, modifying an existing space, or seeking specialized permits, we provide efficient, end-to-end support tailored to your project's needs.",
    serviceTitle: "Our DM Approval Services Include:",
    services: [
      {
        name: "Self-Decoration / Modifications",
        description:
          "Approval for interior updates and minor works without structural changes.",
      },
      {
        name: "New Building Permit",
        description:
          "Full coordination for new construction permits, ensuring compliance with DM codes.",
      },
      {
        name: "Food Safety Approval",
        description:
          "For restaurants, cafes, and food establishments seeking Dubai Municipality food safety clearance.",
      },
      {
        name: "Public Health & Safety Approval",
        description:
          "Approval for establishments requiring hygiene, health, and safety compliance.",
      },
      {
        name: "Swimming Pool Approval (EHS)",
        description:
          "Specialized approvals for pools in residential, commercial, and hospitality spaces.",
      },
      {
        name: "Planning Department Coordination",
        description:
          "Assistance with planning and zoning approvals under DM guidelines.",
      },
      {
        name: "Shisha Permit Approval",
        description:
          "For businesses applying for permission to serve shisha, including ventilation and health regulations.",
      },
      {
        name: "Permit Validity Extension",
        description:
          "We manage the formal process to extend the validity of existing permits.",
      },
      {
        name: "Change of Contractor / Consultant",
        description:
          "Facilitation of DM procedures when switching your project consultant or contractor.",
      },
      {
        name: "Construction / Fit-Out Permit Renewal",
        description:
          "Renewal services for ongoing construction or interior fit-out projects.",
      },
      {
        name: "Private Villa Approval Extension",
        description:
          "Specialized services for extending approvals related to private villa projects.",
      },
      {
        name: "Maintenance Work Approval",
        description:
          "Permits for general repair and maintenance works requiring DM clearance.",
      },
      {
        name: "Painting Work Approval",
        description:
          "For exterior or interior painting projects needing formal approval.",
      },
      {
        name: "Outdoor / Landscape Approval",
        description:
          "DM approvals for landscaping, garden structures, and outdoor design elements.",
      },
      {
        name: "Warehouse Mezzanine Construction & Fit-Out Approval",
        description:
          "Approvals for adding mezzanine levels and interior setups in warehouse spaces.",
      },
      {
        name: "Multi-Level Racking Approval",
        description:
          "Specialized permits for installing racking systems in industrial or commercial warehouses.",
      },
      {
        name: "Unit Merging / Splitting Approval",
        description:
          "Legal permissions for combining or dividing property units.",
      },
      {
        name: "Copy of Approved Drawings / Duplicates",
        description:
          "Retrieval of existing approved plans from Dubai Municipality records.",
      },
      {
        name: "Completion Certificate (DM)",
        description:
          "Full support in obtaining your Dubai Municipality Completion Certificate to finalize the project.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Fast & Reliable",
      "End-to-End Support",
      "Expert Knowledge",
      "Tailored to Your Project",
      "Clear Communication",
    ],
    icon: Building,
  },
  {
    id: 2,
    title: "Dubai Development Authority (DDA) Approvals",
    description:
      "Getting approvals from the **Dubai Development Authority (DDA)** can be a complex process — but with our expert team by your side, it becomes straightforward and stress-free.\n\nWe manage the entire application process on your behalf, ensuring your project complies with DDA regulations and moves forward without unnecessary delays. Whether you're working on a commercial space, warehouse, or private villa, we're here to guide you every step of the way.",
    serviceTitle: "Our DDA Approval Services Include:",
    services: [
      {
        name: "Site Plan / Affection Plan Copy",
        description:
          "Retrieval of official site or affection plans for your project.",
      },
      {
        name: "Copy of Existing Approved Drawings",
        description:
          "Requesting duplicate plans from DDA records for reference or updates.",
      },
      {
        name: "Unit Merging / Splitting Approval",
        description: "Legal approval to combine or divide property units.",
      },
      {
        name: "Zoning Approval for Exceptional Works",
        description:
          "Assistance with zoning applications for unique or non-standard projects.",
      },
      {
        name: "General Fit-Out Approval",
        description: "For interior modifications and commercial space setups.",
      },
      {
        name: "Warehouse Mezzanine Approval",
        description:
          "Approvals for adding mezzanine floors in industrial or storage spaces.",
      },
      {
        name: "Multi-Level Racking Approval",
        description: "Required permissions for racking systems in warehouses.",
      },
      {
        name: "Commercial Activity Approval",
        description:
          "For businesses seeking approval to operate within DDA jurisdiction.",
      },
      {
        name: "Outdoor / Landscape Permit",
        description:
          "Approval for landscaping, outdoor structures, and related works.",
      },
      {
        name: "Construction / Fit-Out Permit Renewal",
        description:
          "Managing renewals for ongoing or paused construction and fit-out work.",
      },
      {
        name: "Private Villa Approval Extension",
        description:
          "Extensions for residential projects requiring additional time.",
      },
    ],
    featuresTitle: "Why Work With Us?",
    features: [
      "Specialized in DDA regulations",
      "Complete documentation and submission support",
      "Faster approvals with fewer obstacles",
      "Transparent communication throughout the process",
    ],
    icon: FileText,
  },
  {
    id: 3,
    title: "Trakhees Approvals",
    description:
      "Our team specializes in delivering comprehensive engineering solutions tailored to meet **Trakhees** requirements and standards. We prioritize sustainability and safety to ensure a smooth and efficient approval process for projects of all types and sizes — from office spaces and warehouses to swimming pool installations.\n\nWhether your project is large or small, we meticulously handle every detail to secure the necessary approvals from Trakhees, so you can proceed with confidence.",
    serviceTitle: "Our Trakhees Approval Services Include:",
    services: [
      {
        name: "Modifications Permit",
        description: "Approvals for structural or design changes.",
      },
      {
        name: "Concept Design Approval",
        description: "Initial design clearance to move forward with planning.",
      },
      {
        name: "General NOC Approval",
        description:
          "No Objection Certificates for a variety of project requirements.",
      },
      {
        name: "Demolition NOC Approval",
        description: "Authorization for safe demolition work.",
      },
      {
        name: "Mobilization NOC Approval",
        description: "Permits to start site mobilization and construction.",
      },
      {
        name: "Exceptional Study",
        description: "Special assessments for unique project requirements.",
      },
      {
        name: "Outdoor / Landscaping Work Approval",
        description: "Permissions for exterior landscaping and related works.",
      },
      {
        name: "Warehouse Extension Approval",
        description: "Approvals for expanding warehouse spaces.",
      },
      {
        name: "Multi-Level Racking Approval",
        description:
          "Permits for installing multi-level storage racking systems.",
      },
      {
        name: "Warehouse Mezzanine Approval",
        description:
          "Authorization for adding mezzanine floors inside warehouses.",
      },
      {
        name: "Swimming Pool Approval",
        description: "Safety and design approval for pool installations.",
      },
      {
        name: "Commercial Activity Approval",
        description:
          "Permissions for commercial operations under Trakhees jurisdiction.",
      },
      {
        name: "Change of Contractor",
        description:
          "Managing approval for contractor changes during projects.",
      },
      {
        name: "Installation of Machinery in Warehouse Approval",
        description: "Permits for installing heavy equipment or machinery.",
      },
      {
        name: "Painting Approval",
        description: "Authorization for interior and exterior painting works.",
      },
      {
        name: "Approval Extension in Private Villa",
        description: "Extensions for residential project permits.",
      },
      {
        name: "Boundary Wall / Fencing Approval",
        description: "Approvals for perimeter walls and fencing.",
      },
    ],
    featuresTitle: "Why Work With Us?",
    features: [
      "Deep expertise with Trakhees standards and regulations",
      "End-to-end management from application to approval",
      "Efficient processing to minimize project delays",
      "Clear communication and regular updates",
    ],
    icon: Anchor,
  },
  {
    id: 4,
    title: "Dubai Civil Defense (DCD) Approvals",
    description:
      "Obtaining approval from the **Dubai Civil Defense (DCD)** is a critical step for any business, whether you're setting up an office, restaurant, retail outlet, or warehouse in Dubai. DCD approval guarantees that your establishment complies with essential safety and security regulations to protect occupants and assets.\n\nWith extensive experience navigating DCD's requirements, our dedicated team ensures a smooth and efficient approval process — helping you meet all safety standards and regulations with confidence.",
    serviceTitle: "Our DCD Approval Services Include:",
    services: [
      {
        name: "Decor Approval",
        description:
          "Clearance for interior decoration plans ensuring fire safety compliance.",
      },
      {
        name: "Safety Certificate Approval",
        description:
          "Certification confirming your premises meet all civil defense safety requirements.",
      },
      {
        name: "Fit-Out Approval",
        description:
          "Permits for interior fit-out works in commercial and residential buildings.",
      },
      {
        name: "Dangerous Goods Approval",
        description:
          "Special permits for storage and handling of hazardous materials.",
      },
      {
        name: "Villa DCD Approval",
        description: "Safety clearances tailored for private villas.",
      },
      {
        name: "Apartment DCD Approval",
        description: "Approval for residential apartment buildings.",
      },
      {
        name: "Warehouse DCD Approval",
        description:
          "Safety certification for industrial and storage warehouses.",
      },
      {
        name: "Commercial DCD Approval",
        description: "Approvals for various commercial establishments.",
      },
      {
        name: "Shisha DCD NOC Approval",
        description:
          "No Objection Certificate for establishments offering shisha services.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "In-depth knowledge of DCD regulations",
      "Efficient handling of all documentation and inspections",
      "Minimizing delays with proactive coordination",
      "Clear guidance through every step of the approval process",
    ],
    icon: Shield,
  },
  {
    id: 5,
    title: "Dubai Electric and Water Authority (DEWA) Approvals",
    description:
      "Reliable access to electricity and water is essential for any residential or commercial project. Our team is here to assist you with your **DEWA affiliation application** and to secure all necessary approvals, ensuring your utility services are set up smoothly and without delays.\n\nWith expert knowledge of DEWA's procedures, we handle the entire approval process on your behalf — so you can focus on your project, confident that your power and water needs are in good hands.",
    serviceTitle: "Our DEWA Approval Services Include:",
    services: [
      {
        name: "Water Meter Approval",
        description:
          "Facilitating the installation and approval of water meters for your property.",
      },
      {
        name: "Electrical Meter Approval",
        description:
          "Managing electrical meter requests and approvals to ensure uninterrupted power supply.",
      },
      {
        name: "Zero Load NOC",
        description:
          "Obtaining No Objection Certificates when no electrical load is required.",
      },
      {
        name: "Additional Load NOC",
        description:
          "Approval for increasing electrical load capacity to meet your project's needs.",
      },
      {
        name: "Fit-Out NOC",
        description:
          "Clearance for electrical fit-out works within your premises.",
      },
    ],
    featuresTitle: "Why Work With Us?",
    features: [
      "Expertise in DEWA regulations and processes",
      "End-to-end handling of applications and approvals",
      "Quick and hassle-free service to avoid project delays",
      "Clear updates and communication throughout",
    ],
    icon: Zap,
  },
  {
    id: 6,
    title: "Dubai Silicon Oasis Authority (DIEZ) Approvals",
    description:
      "As a trusted partner, we provide comprehensive engineering solutions tailored to meet your project's needs within **Dubai Silicon Oasis (DIEZ)**. Our team offers expert consultation and manages the entire approval process with the DIEZ Authority and other relevant Dubai authorities.\n\nWhether you're setting up an office, commercial space, or warehouse, we ensure your project complies with all regulations and moves forward without delays.",
    serviceTitle: "Our DIEZ Approval Services Include:",
    services: [
      {
        name: "Office Approval",
        description:
          "Securing permits for office spaces within Dubai Silicon Oasis.",
      },
      {
        name: "Unit Merging / Splitting Approval",
        description: "Legal approval for combining or dividing property units.",
      },
      {
        name: "Warehouse Approval",
        description: "Permits for warehouse construction and fit-outs.",
      },
      {
        name: "Commercial Approval",
        description: "Approvals for various commercial operations.",
      },
      {
        name: "Fit-Out Approval",
        description: "Authorization for interior fit-out and modifications.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Deep understanding of DIEZ Authority processes",
      "Streamlined application and follow-up services",
      "Clear communication and timely updates",
      "Personalized support tailored to your project type",
    ],
    icon: Cpu,
  },
  {
    id: 7,
    title: "EMAAR Approvals",
    description:
      "As a trusted partner, we offer comprehensive engineering solutions to meet your project's needs within **EMAAR** developments. Our experienced team provides expert consultation and handles the entire approval process with the EMAAR Authority, as well as coordination with other relevant Dubai authorities.\n\nWhether you're planning modifications, landscaping, or extensions, we ensure your project complies with all EMAAR regulations and is approved efficiently.",
    serviceTitle: "Our EMAAR Approval Services Include:",
    services: [
      {
        name: "Extension Approval",
        description:
          "Permits for building extensions within EMAAR communities.",
      },
      {
        name: "Outdoor / Landscaping Approval",
        description: "Approvals for external landscaping and outdoor works.",
      },
      {
        name: "Painting Approval",
        description:
          "Authorization for interior and exterior painting projects.",
      },
      {
        name: "Modification Work Approval",
        description: "Permits for various modification and renovation works.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Extensive knowledge of EMAAR approval processes",
      "Efficient handling from consultation to final approval",
      "Clear communication and timely updates",
      "Customized solutions tailored to your project",
    ],
    icon: Home,
  },
  {
    id: 8,
    title: "JAFZA Approvals",
    description:
      "Our team specializes in guiding clients through the approval process with **JAFZA** and other Dubai authorities, ensuring a fast and hassle-free experience. We are dedicated to helping you join and thrive within the vibrant JAFZA business community.\n\nWhether you are modifying existing facilities or constructing new warehouses, we provide expert support tailored to your specific needs.",
    serviceTitle: "Our JAFZA Approval Services Include:",
    services: [
      {
        name: "Warehouse Modification Work Approval",
        description: "Permits for structural or layout changes in warehouses.",
      },
      {
        name: "Inside Plot Modification Work Approval",
        description: "Approvals for modifications within your plot boundaries.",
      },
      {
        name: "Warehouse Mezzanine Work Approval",
        description:
          "Authorization for adding mezzanine floors inside warehouses.",
      },
      {
        name: "Multi-Level Racking Approval",
        description:
          "Approvals for installing multi-level storage racking systems.",
      },
      {
        name: "New Warehouse / Building Approval",
        description:
          "Permits for the construction of new warehouses or buildings.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Expert knowledge of JAFZA regulations",
      "Smooth management of documentation and submissions",
      "Timely updates and transparent communication",
      "Tailored solutions to fit your project requirements",
    ],
    icon: Container,
  },
  {
    id: 9,
    title: "Nakheel Approvals",
    description:
      "Whether you're buying or leasing property for business or residential use in Dubai, our team is here to guide you through the entire **Nakheel approval** process. We provide expert assistance to ensure your construction and modification projects proceed smoothly and comply with all Nakheel regulations.",
    serviceTitle: "Our Nakheel Approval Services Include:",
    services: [
      {
        name: "Modification Work Approval",
        description: "Permits for structural or design changes.",
      },
      {
        name: "Outdoor / Landscaping Work Approval",
        description: "Approvals for external landscaping and related works.",
      },
      {
        name: "Approval Extension in Private Villa",
        description: "Extensions for villa construction or renovation permits.",
      },
      {
        name: "Painting Approval Permit",
        description: "Authorization for interior and exterior painting.",
      },
      {
        name: "Copy of Existing Approved Drawings",
        description: "Retrieval of approved plans for reference or updates.",
      },
      {
        name: "Copy of Site Plan / Affection Plan",
        description: "Official documentation of site or affection plans.",
      },
      {
        name: "Swimming Pool and Pergola Approval",
        description: "Safety and design approvals for pools and pergolas.",
      },
      {
        name: "Additional Plot Area Approval",
        description: "Permissions for expanding your plot area.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Expert knowledge of Nakheel processes",
      "Comprehensive support from consultation to approval",
      "Efficient handling to avoid project delays",
      "Clear communication and regular updates",
    ],
    icon: TreePalm,
  },
  {
    id: 10,
    title: "Third Party Consultants Approval",
    description:
      "In industries with high safety risks, third-party consultants play a critical role in ensuring compliance and protecting your project. The government closely regulates these consultants, requiring them to hold specific certifications to operate legally and effectively.\n\nOur company provides trusted third-party consultants tailored to your project's unique needs, ensuring all safety and regulatory requirements are met promptly and efficiently.",
    serviceTitle: "Our Third-Party Consultant Services Include:",
    services: [
      {
        name: "Engineering Consultancy",
        description: "Expert technical advice and project support.",
      },
      {
        name: "Third-Party Safety Certificate",
        description:
          "Certification confirming compliance with safety standards.",
      },
      {
        name: "Third-Party Peer Review",
        description:
          "Independent review and validation of project designs and processes.",
      },
      {
        name: "No Objection Certificates (NOCs)",
        description: "Assistance in obtaining necessary government clearances.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Access to certified and experienced consultants",
      "Ensuring full compliance with government regulations",
      "Timely and efficient certification and approvals",
      "Customized solutions for your project's safety needs",
    ],
    icon: Users,
  },
  {
    id: 11,
    title: "Food and Safety Approval",
    description:
      "Starting a restaurant, café, commercial kitchen, or any food-related business in Dubai requires mandatory **Food and Safety approval** from Dubai Municipality. This approval ensures your establishment complies with all health, hygiene, and safety standards, protecting your customers and your business.\n\nOur experienced team handles the entire approval process for you — from preparing documentation to liaising with authorities — making it simple and hassle-free. We guide you step-by-step to ensure your business is ready to open on time and meets all regulatory requirements.",
    serviceTitle: "Our Food and Safety Approval Services Include:",
    services: [
      {
        name: "Food Safety Compliance Assessment",
        description:
          "Comprehensive evaluation of your establishment's food safety standards.",
      },
      {
        name: "Health and Hygiene Certification",
        description: "Ensuring compliance with health and hygiene regulations.",
      },
      {
        name: "Documentation Preparation",
        description:
          "Complete preparation of all required documents and applications.",
      },
      {
        name: "Authority Liaison",
        description:
          "Direct communication and coordination with Dubai Municipality.",
      },
    ],
    featuresTitle: "Why Choose Us",
    features: [
      "Expert in Dubai food safety regulations",
      "Complete support from start to finish",
      "Fast, hassle-free approval process",
      "Customized guidance for your business",
      "Trusted by food entrepreneurs across Dubai",
    ],
    icon: ChefHat,
  },
  {
    id: 12,
    title: "TECOM Approvals",
    description:
      "If your property falls under **TECOM**, obtaining TECOM approval is an essential step before submitting applications to the Dubai Development Authority (DDA). Our experienced team is dedicated to helping you secure TECOM approvals efficiently, ensuring your project meets all necessary requirements and progresses smoothly.",
    serviceTitle: "Our TECOM Approval Services Include:",
    services: [
      {
        name: "Modification Work Approval",
        description: "Permits for any structural or design changes.",
      },
      {
        name: "New Building Approval",
        description: "Approvals for new construction projects.",
      },
      {
        name: "Commercial Approval",
        description:
          "Permissions for commercial activities within TECOM zones.",
      },
      {
        name: "Boundary / Fencing Work Approval",
        description: "Authorizations for perimeter walls and fencing.",
      },
      {
        name: "Warehouse Modification Work Approval",
        description: "Permits for changes inside warehouse facilities.",
      },
      {
        name: "Warehouse Mezzanine Work Approval",
        description: "Approval for adding mezzanine levels within warehouses.",
      },
      {
        name: "Multi-Level Racking Approval",
        description: "Permissions for installing multi-level storage racking.",
      },
    ],
    featuresTitle: "Why Work With Us?",
    features: [
      "In-depth knowledge of TECOM approval procedures",
      "Seamless management from documentation to approval",
      "Clear communication with timely updates",
      "Personalized support tailored to your project",
    ],
    icon: Network,
  },
  {
    id: 13,
    title: "Shisha Approval",
    description:
      "Opening a Shisha café or offering Shisha services in your restaurant in Dubai requires strict compliance with regulations set by the government and Dubai Municipality. Securing the necessary **Shisha café license** involves following detailed procedures to ensure your application is approved smoothly and without delays.\n\nOur experienced team will guide you through every step of the approval process, ensuring your business meets all legal requirements for safe and compliant Shisha operations.",
    serviceTitle: "Our Shisha Approval Services Include:",
    services: [
      {
        name: "Shisha License Application",
        description:
          "Complete handling of shisha café license applications and submissions.",
      },
      {
        name: "Ventilation System Compliance",
        description:
          "Ensuring proper ventilation systems meet regulatory requirements.",
      },
      {
        name: "Health Regulation Compliance",
        description:
          "Meeting all health and safety standards for shisha operations.",
      },
      {
        name: "Documentation and Permits",
        description:
          "Comprehensive preparation of all required documents and permits.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Comprehensive understanding of Shisha licensing regulations",
      "Step-by-step support throughout the approval process",
      "Efficient handling of documentation and submissions",
      "Ensuring full compliance for uninterrupted operation",
    ],
    icon: Coffee,
  },
  {
    id: 14,
    title: "Swimming Pool Approval",
    description:
      "Planning to install a swimming pool on your property? Our expert team is here to guide you through the entire approval process, from initial planning to final authorization.\n\nWe ensure that your project meets all necessary regulations and standards specific to your location in Dubai. Depending on your property's area, we will submit the application to the appropriate municipality or authority, ensuring a smooth and efficient approval process.",
    serviceTitle: "Our Swimming Pool Approval Services Include:",
    services: [
      {
        name: "Pool Design Approval",
        description:
          "Securing approvals for swimming pool design and specifications.",
      },
      {
        name: "Safety Compliance Assessment",
        description: "Ensuring all safety standards and regulations are met.",
      },
      {
        name: "Municipal Authority Coordination",
        description:
          "Liaison with appropriate Dubai authorities based on property location.",
      },
      {
        name: "Installation Permits",
        description:
          "Obtaining all necessary permits for pool construction and installation.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Expertise in swimming pool regulations across Dubai authorities",
      "Step-by-step guidance through planning and approval",
      "Efficient handling of all documentation and submissions",
      "Clear communication to keep you informed at every stage",
    ],
    icon: Waves,
  },
  {
    id: 15,
    title: "Spa Approval",
    description:
      "Starting a spa in Dubai—whether for hair, makeup, nails, massage, or other beauty services—requires specific approvals to comply with health, hygiene, and safety regulations set by local authorities.\n\nOur team provides full support throughout the approval process, from understanding requirements to preparing and submitting all necessary documentation. We ensure that your spa meets all regulatory standards, allowing you to open your business confidently and without delay.",
    serviceTitle: "Our Spa Approval Services Include:",
    services: [
      {
        name: "Spa License Application",
        description: "Complete handling of spa and salon license applications.",
      },
      {
        name: "Health and Hygiene Compliance",
        description:
          "Ensuring compliance with all health and hygiene regulations.",
      },
      {
        name: "Safety Standards Assessment",
        description:
          "Meeting all safety requirements for spa and beauty service operations.",
      },
      {
        name: "Documentation and Permit Processing",
        description:
          "Comprehensive preparation and submission of all required documents.",
      },
    ],
    featuresTitle: "Why Choose Us?",
    features: [
      "Expertise in Dubai spa and salon regulations",
      "End-to-end support for application and approval",
      "Accurate documentation to avoid delays or rejections",
      "Clear, step-by-step guidance tailored to your business",
    ],
    icon: Sparkles,
  },
  {
    id: 16,
    title: "RTA Approval",
    description:
      "If your project includes construction, modifications, or any activity within areas governed by Dubai's **Roads and Transport Authority (RTA)**, obtaining RTA approval is a crucial step.\n\nWhether the work is on your property or extends into RTA jurisdiction, our team will manage the process from start to finish. We handle all necessary procedures, coordinate with RTA officials, and ensure your project complies with all relevant regulations — so you can proceed without delays.",
    serviceTitle: "Our RTA Approval Services Include:",
    services: [
      {
        name: "RTA Construction Permits",
        description:
          "Securing permits for construction activities within RTA jurisdiction.",
      },
      {
        name: "Road and Transport Impact Assessment",
        description:
          "Evaluating and managing project impact on roads and transportation.",
      },
      {
        name: "RTA Official Coordination",
        description:
          "Direct liaison and coordination with RTA officials and departments.",
      },
      {
        name: "Compliance Documentation",
        description:
          "Preparing all required documentation to ensure RTA compliance.",
      },
    ],
    featuresTitle: "Why Choose Us",
    features: [
      "In-depth knowledge of RTA regulations",
      "End-to-end handling of the approval process",
      "Strong coordination with RTA officials",
      "Fast, reliable service with minimal delays",
      "Proven track record across diverse projects",
    ],
    icon: Car,
  },
  {
    id: 17,
    title: "Other Approvals",
    description:
      "If your project requires additional or specialized approvals in Dubai, we're here to help. Whether it's from government bodies, municipalities, or specific regulatory departments, our team will guide you through the process from start to finish.\n\nWe provide clear, step-by-step support — helping you understand the required documentation, procedures, and timelines. Our goal is to ensure that all approvals are secured efficiently, so your project stays on track and moves forward without unnecessary delays.",
    serviceTitle: "Our Other Approval Services Include:",
    services: [
      {
        name: "Government Body Approvals",
        description:
          "Securing approvals from various Dubai government departments and bodies.",
      },
      {
        name: "Specialized Regulatory Permits",
        description:
          "Obtaining permits from specific regulatory departments as required.",
      },
      {
        name: "Municipal Clearances",
        description:
          "Handling clearances from different municipal authorities in Dubai.",
      },
      {
        name: "Custom Approval Solutions",
        description:
          "Tailored approval services for unique or specialized project requirements.",
      },
    ],
    featuresTitle: "Why Choose Us",
    features: [
      "Expertise in a wide range of government approvals",
      "Personalized guidance for complex requirements",
      "Strong network across key regulatory departments",
      "Smooth, efficient handling of all documentation",
      "Reliable support to keep your project on schedule",
    ],
    icon: Settings,
  },
];

const planningandDrawingsData = [
  {
    id: 1,
    title: "Architecture Drawings",
    description:
      "Detailed floor plans, elevations, and sections that bring your architectural vision to life with precision and clarity.",
    icon: DraftingCompass,
  },
  {
    id: 2,
    title: "MEP Drawings",
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing layouts to ensure efficiency, safety, and compliance in your building systems.",
    icon: Cable,
  },
  {
    id: 3,
    title: "Structural Drawings",
    description:
      "Engineering-based diagrams outlining the framework and load-bearing systems that form the foundation of your construction.",
    icon: Landmark,
  },
  {
    id: 4,
    title: "3D Visualization",
    description:
      "Photorealistic 3D renders and walkthroughs to help you visualize your space before it’s built, enhancing design decisions.",
    icon: Boxes,
  },
];

const fitoutWorksData = [
  {
    id: 1,
    title: "Commercial",
    description:
      "Office and business space fitouts tailored for productivity and branding.",
    icon: Building2,
  },
  {
    id: 2,
    title: "Residential",
    description:
      "Custom home interiors blending comfort, function, and aesthetics.",
    icon: Home,
  },
  {
    id: 3,
    title: "Warehouse",
    description:
      "Functional warehouse interiors built for storage and workflow efficiency.",
    icon: Warehouse,
  },
  {
    id: 4,
    title: "Retail",
    description:
      "Engaging retail spaces designed to enhance customer experience and sales.",
    icon: ShoppingBag,
  },
  {
    id: 5,
    title: "Landscaping",
    description:
      "Outdoor designs that connect nature with built environments beautifully.",
    icon: Trees,
  },
  {
    id: 6,
    title: "Racking Installation",
    description:
      "Optimized storage systems for organized, high-capacity solutions.",
    icon: PanelsTopLeft,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Enhanced Services Hero Section */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/services.png"
            alt="AIMTERIOR Professional Services"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center max-w-screen-xl z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Service Badge */}
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-brand-50/20 to-brand-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-brand-200 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-brand-100 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-brand-50 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Professional Services
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Comprehensive Solutions
              <span className="block bg-gradient-to-r from-brand-50 via-brand-200 to-brand-400 bg-clip-text text-transparent">
                For Every Project
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed text-gray-100 animate-slide-up-delay">
              From authority approvals to final construction, AIMTERIOR delivers
              end-to-end services that streamline your project journey.
              Experience the difference of working with Dubai&apos;s most
              trusted architectural and design consultancy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-delay">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center justify-center space-x-3">
                    <span>Get Started Today</span>
                    <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Explore Services
              </button>
            </div>

            {/* Service Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <FaRegClipboard className="text-2xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Authority Approvals
                </h3>
                <p className="text-sm text-gray-300">
                  Navigate regulatory requirements with expert guidance
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <TbGeometry className="text-2xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  Design & Planning
                </h3>
                <p className="text-sm text-gray-300">
                  Comprehensive architectural and MEP solutions
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-50 to-brand-400 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <MdConstruction className="text-2xl" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fit-out & Build</h3>
                <p className="text-sm text-gray-300">
                  Complete construction and interior solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Main Services Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-bl px-4 py-2 rounded-full border border-blue-100 mb-6">
              <div className="w-2 h-2 bg-brand-50 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-brand-50 uppercase tracking-wider">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-brand-50 to-brand-400 bg-clip-text text-transparent">
                Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial approvals to final construction, we provide
              end-to-end solutions that transform your vision into reality
            </p>
          </div>

          {/* Authority Approvals Section */}
          <div className="mb-20">
            <ServiceList
              data={authorityApprovalsData}
              title={"Authority Approvals"}
              description="We help navigate the complexities of local authority regulations and secure essential approvals for your projects efficiently and hassle-free."
            />
          </div>
        </div>
      </section>

      {/* Planning & Drawings Section */}
      <section className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList
            data={planningandDrawingsData}
            title={"Planning & Drawings"}
            description="Our team crafts precise planning layouts and architectural drawings tailored to meet both your vision and statutory requirements."
            enableSearch={false}
          />
        </div>
      </section>

      {/* Fit-out Works Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList
            data={fitoutWorksData}
            title={"Fit-out Works & Build"}
            description="From interiors to final finishes, we execute fit-out works with precision and quality, ensuring your space is ready for purpose and style."
            enableSearch={false}
          />
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzM3NEEzNiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHN2Zz4K')] opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                Our Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How We{" "}
              <span className="bg-gradient-to-r from-brand-100 to-brand-400 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined approach that ensures your project success from
              concept to completion
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Initial project assessment and requirement analysis",
                icon: "💬",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed planning, design, and approval strategy",
                icon: "📋",
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional implementation with quality control",
                icon: "🔨",
              },
              {
                step: "04",
                title: "Completion",
                description: "Final delivery and post-project support",
                icon: "✨",
              },
            ].map((process, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-y-1/2"></div>
                  </div>
                )}

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-white/10">
                      {process.step}
                    </div>
                    <div className="text-3xl">{process.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 bg-gradient-to-r from-brand-50 to-brand-400 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Service Excellence in Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "22+", label: "Authority Types", icon: "📋" },
              { number: "500+", label: "Approvals Secured", icon: "✅" },
              { number: "100+", label: "Design Projects", icon: "📐" },
              { number: "24/7", label: "Support Available", icon: "🕒" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Let&apos;s discuss your requirements and create a customized
              solution that brings your vision to life
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="group">
                <button className="bg-gradient-to-r from-brand-50 to-brand-400 hover:from-brand-100 hover:to-brand-400 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center justify-center space-x-3">
                    <span>Get Free Consultation</span>
                    <MoveRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              <Link href="/projects">
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
                  View Our Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
