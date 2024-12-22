"use client";
import React from "react";
import { motion } from "motion/react";

const InspiringLuxury = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-tight mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        INSPIRING LUXURY
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {[
          {
            number: "01",
            title: "Our Mission",
            content:
              "At Luxedesign, our mission is to redefine luxury living in the UAE through exceptional design and development solutions. We prioritize customer satisfaction, blending timeless elegance with modern functionality to create bespoke living spaces that reflect our client's unique personalities. With a commitment to quality, sustainability, and innovative design, we strive to be the preferred choice for luxury villa design, setting new standards in the industry and exceeding expectations at every turn....",
          },
          {
            number: "02",
            title: "Our Vision",
            content:
              "Our vision at Luxedesign is to inspire and transform the way people experience luxury living. We aspire to be the leading force in creating iconic and visionary spaces that redefine architectural excellence. Through our commitment to innovation, craftsmanship, and personalized design, we aim to elevate the standards of luxury living, setting new benchmarks in the industry and creating extraordinary environments that leave a lasting impression.",
          },
          {
            number: "03",
            title: "Our Values",
            content:
              "Our values are the cornerstone of our company. We strive for excellence in all our endeavors, embracing creativity and innovation to deliver exceptional design and development solutions. Our commitment to integrity, collaboration, and a client-centric approach ensures that we exceed expectations and build lasting relationships. We prioritize sustainability, paying meticulous attention to detail, and maintaining a strong focus on craftsmanship. These values guide us in redefining luxury living and setting new standards in the industry.",
          },
        ].map((section, index) => (
          <motion.div
            key={section.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-8xl font-bold text-primary/50">
              {section.number}
            </span>
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InspiringLuxury;
