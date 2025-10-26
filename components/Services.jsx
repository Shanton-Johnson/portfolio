"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets, serviceData } from "@/assets/assets";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-[#0a0a0a] transition-all">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3 dark:text-white"
        >
          My <span className="text-blue-600 dark:text-blue-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I offer a range of design and development services to help businesses
          and individuals build modern digital experiences that inspire and
          engage users.
        </motion.p>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-[#111] rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-full transition-all group-hover:scale-110">
                  <Image src={service.icon} alt={service.title} width={40} height={40} />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">{service.description.slice(0, 100)}...</p>

              <Link href={service.link}>
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium text-sm">
                  Read More
                  <Image src={assets.right_arrow_bold} alt="arrow" width={16} height={16} />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
