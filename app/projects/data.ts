export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectCta {
  prompt: string;
  linkText: string;
  href: string;
}

export interface Project {
  title: string;
  location: string;
  category: string;
  image: string;
  sections: ProjectSection[];
  cta: ProjectCta;
}

export const projectData = {
  "rustic-minimalist-apartment-natural-warmth": {
    title: "🏠 Rustic-Minimalist Apartment with Natural Warmth",
    location: "Location: Dubai, UAE",
    category: "Interior",
    image: "/images/p1.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client wanted a modern interior that felt clean and minimal, yet warm and inviting. They requested light wood accents and a palette of earth tones to soften the space, all within a high-ceiling apartment filled with natural light.",
      },
      {
        heading: "✍️ The Process",
        body: "We began with a neutral base and introduced warmth through carefully selected materials and textures. Light oak wood was incorporated on flooring and cabinetry to bring natural elements into the design. Vertical lines and soft lighting emphasized the ceiling height, while the open layout maintained a seamless, airy flow throughout the apartment.",
      },
      {
        heading: "✅ The Result",
        body: "The final design is refined and welcoming. Natural materials and earthy tones soften the modern aesthetic, creating a space that feels open, balanced, and perfectly aligned with the client’s vision.",
      },
    ],
    cta: {
      prompt: "💭 Inspired to bring warmth and simplicity into your space?",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "serene-villa-landscape-design": {
    title: "🏡 Serene Villa Landscape Design",
    location: "Location: Dubai, UAE",
    category: "Outdoor",
    image: "/images/p2.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client sought to transform their outdoor area into a peaceful villa-inspired retreat. Key features included a stylish pergola, a shimmering swimming pool, and lush landscaping to create a relaxing environment that blends luxury with nature.",
      },
      {
        heading: "✍️ The Process",
        body: "We crafted a harmonious design that integrates natural materials like wood and stone with carefully selected greenery. The pergola offers a shaded gathering spot, while the pool serves as a focal point for leisure and elegance. Thoughtful lighting accents pathways and highlights architectural elements, enhancing the ambiance from day to night.",
      },
      {
        heading: "✅ The Result",
        body: "The final space exudes tranquility and sophistication, offering a perfect balance of comfort and style. The villa’s outdoor area now serves as a serene haven, ideal for both intimate relaxation and entertaining guests.",
      },
    ],
    cta: {
      prompt: "Ready to create your own outdoor sanctuary?",
      linkText: "Contact us today →",
      href: "/contact",
    },
  },
  "villa-outdoor-pergola-bbq-landscaping": {
    title: "🏡 Villa Outdoor Pergola with BBQ & Landscaping",
    location: "📍 Location: Dubai, UAE",
    category: "Outdoor",
    image: "/images/p3.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client wanted a modern, functional outdoor living space that combines relaxation with entertainment. The design focused on a sleek pergola with an integrated BBQ counter, surrounded by thoughtfully planned landscaping to create a comfortable and inviting atmosphere.",
      },
      {
        heading: "✍️ The Process",
        body: "We designed the pergola using clean, durable materials such as powder coated metal and concrete elements to ensure longevity and a contemporary aesthetic. The BBQ counter was positioned for convenience and to promote social interaction. All essential features including built in storage, a sink, and a concealed trash bin were integrated seamlessly into the design, maintaining a clean and cohesive look. The landscaping features a blend of native plants and manicured greenery that provides privacy and enhances the visual appeal. Carefully placed lighting adds warmth and usability during evening hours.",
      },
      {
        heading: "✅ The Result",
        body: "The outdoor space balances modern simplicity with comfort and practicality. The pergola and BBQ counter create a perfect setting for gatherings, while the lush landscaping provides a serene backdrop, ideal for both everyday enjoyment and special events.",
      },
    ],
    cta: {
      prompt: "💭 Ready to create your ideal outdoor living space",
      linkText: "Contact us today →",
      href: "/contact",
    },
  },
  "modern-cafe-interior-elegant-finishes": {
    title: "☕ Modern Café Interior with Elegant Finishes",
    location: "Location: Dubai, UAE",
    category: "Commercial",
    image: "/images/p4.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client envisioned a bright, modern café interior with a clean, minimal aesthetic. The space needed to feel inviting yet refined, with a predominantly white color palette complemented by subtle accents of gold and warm browns.",
      },
      {
        heading: "✍️ The Process",
        body: "We developed a light-filled interior featuring smooth surfaces and minimal visual noise. Soft white tones were used throughout the walls, ceilings, and furnishings to create a sense of openness and calm. Accents of gold in lighting fixtures and detailing introduced a touch of elegance, while warm brown tones in furniture and finishes added depth and comfort. Modern pendant lights and concealed LED strips provided clean, sophisticated lighting that enhances the space throughout the day.",
      },
      {
        heading: "✅ The Result",
        body: "The final design is a sleek and welcoming café interior that feels both luxurious and approachable. The contrast between crisp white surfaces and warm accents creates a balanced environment ideal for both quick visits and longer stays, aligning perfectly with the client's vision of a modern social space.",
      },
    ],
    cta: {
      prompt: "Want to bring your commercial space to life?",
      linkText: "Let’s talk →",
      href: "/contact",
    },
  },
  "japandi-inspired-co-working-space-design": {
    title: "🧑‍💼 Japandi-Inspired Co-Working Space Design",
    location: "Location: Dubai, UAE",
    category: "Workplace",
    image: "/images/p5.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client wanted a co-working environment that balances minimalist elegance with warm, natural elements. The goal was to create a serene yet functional space that fosters focus, creativity, and collaboration while reflecting the calm and simplicity of Japandi design.",
      },
      {
        heading: "✍️ The Process",
        body: "We embraced clean lines, neutral tones, and natural materials throughout the design. Open-plan workstations, cozy breakout areas, and quiet corners were arranged thoughtfully to support diverse working styles. Light wood accents, soft textiles, and greenery were introduced to bring warmth and organic textures, while subtle lighting enhanced the tranquil atmosphere. The overall aesthetic is uncluttered yet inviting, combining the best of Japanese simplicity and Scandinavian comfort.",
      },
      {
        heading: "✅ The Result",
        body: "The finished co-working space is a harmonious blend of minimalism and warmth. It encourages productivity and wellbeing by creating a calm, balanced environment where professionals can work, connect, and thrive. The Japandi influence is evident in every detail, offering timeless style with a focus on natural beauty and function.",
      },
    ],
    cta: {
      prompt: "Inspired to create a Japandi-style workspace?",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "daycare-center-interior-design": {
    title: "🧸 Daycare Center Interior Design",
    location: "Location: Dubai, UAE",
    category: "Institutional",
    image: "/images/p6.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client wanted to create a bright, safe, and nurturing environment for a modern daycare center. The space needed to support early childhood development through a well-balanced layout that encourages both play and learning in a secure, welcoming setting.",
      },
      {
        heading: "✍️ The Process",
        body: "We designed the space with young children in mind using soft color palettes, rounded edges, and non-toxic durable materials throughout. Different zones were created to support structured activities, free play, reading, and rest. Natural lighting was maximized to enhance focus and mood while gentle artificial lighting ensures comfort throughout the day. Thoughtful details like low shelving, cushioned flooring, and visual cues help create a space that feels intuitive and engaging for both children and caregivers.",
      },
      {
        heading: "✅ The Result",
        body: "The final design is a cheerful and functional daycare center that promotes safety, creativity, and learning. Its warm atmosphere, clear organization, and playful details make it a space where children can grow confidently and comfortably and where parents can feel at ease.",
      },
    ],
    cta: {
      prompt: "Creating a safe and inspiring space for little ones?",
      linkText: "Let’s design it together →",
      href: "/contact",
    },
  },
  "industrial-minimalist-ice-cream-shop-interior": {
    title: "🍦 Industrial Minimalist Ice Cream Shop Interior",
    location: "Location: Asia",
    category: "Retail",
    image: "/images/p7.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client wanted a clean and modern space that felt stylish without being overdesigned. The goal was to create a sleek ice cream shop using concrete-effect walls combined with warm wood accents, delivering a balanced and inviting atmosphere.",
      },
      {
        heading: "✍️ The Process",
        body: "We applied a concrete-look finish to the walls to achieve a cool, urban texture without the roughness of raw concrete. Warm wood elements were incorporated in the counter and seating areas to add softness and natural warmth. The layout was kept open and functional, ensuring smooth customer flow. Clean lines, a neutral color palette, and subtle lighting maintained the modern and welcoming vibe.",
      },
      {
        heading: "✅ The Result",
        body: "The final interior strikes the perfect balance between industrial edge and cozy warmth. The concrete-effect walls paired with wood details give the shop a distinct, modern character that is minimal yet inviting, perfectly matching the client’s vision.",
      },
    ],
    cta: {
      prompt:
        "Looking to create a standout retail space with modern simplicity?",
      linkText: "Let’s make it happen →",
      href: "/contact",
    },
  },
  "modern-villa-kitchen-interior": {
    title: "🧑‍💼 Modern Villa Kitchen Interior",
    location: "📍 Location: Private Villa – Dubai, UAE",
    category: "Interior",
    image: "/images/p8.png",
    sections: [
      {
        heading: "🎯 Design Intent",
        body: "The kitchen was envisioned as a refined, functional core of the home — blending modern aesthetics with warm, natural materials. The client sought a space defined by simplicity, quality, and timeless elegance.",
      },
      {
        heading: "✍️ Design Approach",
        body: "A soft beige palette grounds the space, complemented by a carefully selected marble countertop that adds depth and sophistication. Clean lines, integrated appliances, and concealed storage maintain a seamless, uncluttered look. Lighting was designed to highlight material textures and enhance spatial clarity.\n\nProportions, circulation, and detailing were considered to ensure the kitchen feels both open and intimate — equally suited for everyday use and entertaining.",
      },
      {
        heading: "✅ Final Result",
        body: "The finished kitchen is minimalist yet inviting, refined yet highly functional. It reflects a quiet sense of luxury through natural materials, thoughtful composition, and precise execution — perfectly aligned with contemporary villa living.",
      },
    ],
    cta: {
      prompt: "💭 Designing spaces with intention?",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "modern-villa-living-room-interior": {
    title: "🧑‍💼 Modern Villa Living Room Interior",
    location: "📍 Location: Private Villa – Dubai, UAE",
    category: "Interior",
    image: "/images/p9.png",
    sections: [
      {
        heading: "🎯 Design Intent",
        body: "The living room was conceived as a statement of spatial openness and refined elegance. The client envisioned a light-filled volume where architecture, interior, and landscape merge seamlessly — a space that feels expansive, calm, and connected.",
      },
      {
        heading: "✍️ Design Approach",
        body: "The design revolves around a full-height glazed façade that opens the interior to panoramic views, creating a strong indoor-outdoor connection. The high ceiling enhances verticality, while a custom-designed linear chandelier draws the eye upward, echoing the scale of the glazing and emphasizing the spatial drama.\n\nMaterials were kept minimal to let light, form, and proportion take center stage. Neutral tones, soft textures, and clean-lined furniture support a restrained palette that elevates the architectural qualities of the space. Every element — from lighting to layout — was curated to emphasize openness, clarity, and quiet sophistication.",
      },
      {
        heading: "✅ Final Result",
        body: "The living room balances grandeur with intimacy. It feels sculptural yet serene — a space defined by light, volume, and composure. The interplay between architectural scale and refined interior detailing creates a truly elevated living experience.",
      },
    ],
    cta: {
      prompt: "💭 Envisioning living spaces with architectural depth?",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "contemporary-outdoor-living-design": {
    title: "🧑‍💼 Contemporary Outdoor Living Design",
    location: "📍 Location: Private Villa, Dubai, UAE",
    category: "Outdoor",
    image: "/images/p10.png",
    sections: [
      {
        heading: "🎯 Design Intent",
        body: "The outdoor space was envisioned as a seamless extension of the villa’s architecture, a tranquil and elevated environment that supports both relaxation and refined outdoor living. The design focuses on clean lines, spatial flow, and a strong connection to the surrounding landscape.",
      },
      {
        heading: "✍️ Design Approach",
        body: "A custom-designed pergola, integrated directly into the villa’s structure, defines the outdoor lounge area. Its linear silhouette mirrors the architectural language of the home, offering shade and spatial definition without interrupting visual openness. Outdoor seating is arranged to promote comfort and conversation, using tactile, weather-resistant materials that complement the natural palette.\n\nThe infinity edge swimming pool anchors the composition, stretching toward the horizon and visually merging with the landscape beyond. Its reflective surface amplifies the sense of space and calm, acting as both a sculptural element and a leisure feature. Minimal landscaping with curated greenery softens the architecture and adds layered depth to the scene.\n\nLighting, material continuity, and thoughtful detailing ensure the space remains elegant and usable from day to night.",
      },
      {
        heading: "✅ Final Result",
        body: "The completed outdoor area is a refined blend of structure and serenity. The infinity pool, pergola, and landscape work together to create a unified and luxurious setting, extending the villa’s living experience into the open air while maintaining architectural clarity and elegance.",
      },
    ],
    cta: {
      prompt: "💭 Looking to design timeless outdoor spaces with purpose?",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "warehouse-racking-installation": {
    title: "🧑‍💼 Warehouse Racking Installation",
    location: "📍 Location: Industrial Facility, Dubai, UAE",
    category: "Industrial",
    image: "/images/p11.png",
    sections: [
      {
        heading: "🎯 Project Objective",
        body: "The client required a high efficiency storage solution to optimize the available warehouse volume while ensuring ease of access, safety, and long term operational performance. The goal was to install a racking system tailored to the client's specific inventory and logistical workflows.",
      },
      {
        heading: "✍️ Design Approach",
        body: "The warehouse layout was studied in detail to maximize storage capacity without compromising movement or safety. A heavy duty racking system was designed and positioned to support efficient vertical storage, optimized picking routes, and clear access aisles for material handling equipment.\n\nEach rack configuration was engineered based on load requirements and operational needs, including pallet dimensions, forklift maneuverability, and inventory turnover rates. Clear zoning was established to streamline storage, retrieval, and replenishment processes.\n\nThe visual layout also reflects proper integration of fire safety clearances, lighting, and mechanical systems, ensuring compliance with industrial standards and best practices.",
      },
      {
        heading: "✅ Final Result",
        body: "The completed installation delivers a well organized, high capacity storage environment that supports productivity and operational flow. The racking system is durable, scalable, and precisely aligned with the warehouse’s functional demands, providing the client with a streamlined solution for long term storage efficiency.",
      },
    ],
    cta: {
      prompt: "💭 Need to optimize your warehouse space with precision",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "warehouse-with-mezzanine-office-design": {
    title: "🧑‍💼 Warehouse with Mezzanine Office Design",
    location: "📍 Location: Industrial Facility, Dubai, UAE",
    category: "Industrial",
    image: "/images/p12.png",
    sections: [
      {
        heading: "🎯 Project Objective",
        body: "The client required a space efficient solution to integrate office operations within an active warehouse environment. The goal was to create a functional mezzanine level that accommodates administrative tasks while maintaining clear workflow and storage access below.",
      },
      {
        heading: "✍️ Design Approach",
        body: "A steel mezzanine structure was introduced to utilize vertical space effectively without disrupting ground level operations. The mezzanine office was positioned to offer visibility across the warehouse floor, enabling oversight and coordination in real time.\n\nThe office zone features enclosed glass partitions for acoustic privacy while maintaining transparency and light flow. The staircase and structural framing were designed with safety and durability in mind, ensuring compliance with industrial standards. Underneath the mezzanine, the area remains fully accessible for storage or staging, maximizing usable square footage.\n\nMechanical, electrical, and fire safety systems were integrated seamlessly into both levels, ensuring operational continuity and comfort.",
      },
      {
        heading: "✅ Final Result",
        body: "The result is a smart integration of workspace within the warehouse envelope. The mezzanine office provides a comfortable, efficient environment for staff, while the layout preserves full functionality of the warehouse floor. This dual level solution enhances productivity, communication, and space utilization.",
      },
    ],
    cta: {
      prompt: "💭 Looking to integrate office space into your warehouse",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
  "industrial-modern-apartment-urban-edge": {
    title: "🏢 Industrial Modern Apartment with Urban Edge",
    location: "📍 Location: Dubai, UAE",
    category: "Interior",
    image: "/images/p13.png",
    sections: [
      {
        heading: "🎯 The Vision",
        body: "The client sought a bold, contemporary interior with an urban-industrial character. The design direction focused on raw textures, minimal detailing, and a monochromatic palette of greys and blacks, creating a sophisticated space with a strong architectural identity.",
      },
      {
        heading: "✍️ The Process",
        body: "We approached the design by balancing industrial elements with modern refinement. Exposed concrete finishes, matte black fixtures, and steel accents set the tone, while sleek furniture and integrated lighting added contrast and functionality. The open layout enhances spatial flow, while darker tones are layered with texture to avoid visual heaviness. Custom cabinetry and built-ins were designed with a minimalist aesthetic, reinforcing clean lines and material continuity.",
      },
      {
        heading: "✅ The Result",
        body: "The finished apartment captures the essence of industrial minimalism with a modern twist. Rich in tone and texture, the space feels bold yet balanced, offering a refined living environment with an unmistakably urban character.",
      },
    ],
    cta: {
      prompt: "💭 Drawn to the bold aesthetic of industrial modern design",
      linkText: "Let’s collaborate →",
      href: "/contact",
    },
  },
} as const;

export type ProjectSlug = keyof typeof projectData;

export const projectOrder: ProjectSlug[] = [
  "rustic-minimalist-apartment-natural-warmth",
  "serene-villa-landscape-design",
  "villa-outdoor-pergola-bbq-landscaping",
  "modern-cafe-interior-elegant-finishes",
  "japandi-inspired-co-working-space-design",
  "daycare-center-interior-design",
  "industrial-minimalist-ice-cream-shop-interior",
  "modern-villa-kitchen-interior",
  "modern-villa-living-room-interior",
  "contemporary-outdoor-living-design",
  "warehouse-racking-installation",
  "warehouse-with-mezzanine-office-design",
  "industrial-modern-apartment-urban-edge",
];
