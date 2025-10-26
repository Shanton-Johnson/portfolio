"use client"

import { workData } from "@/assets/assets"
import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Web", "Mobile", "Design", "Gaming"]

const WorkPage = () => {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects =
    activeTab === "All"
      ? workData
      : workData.filter((p) => p.category === activeTab)

  return (
    <div className="w-full px-[10%] py-16 dark:text-white">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-Ovo text-center mb-12"
      >
        Projects by Category
      </motion.h2>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeTab === cat
                ? "bg-lime-300 text-black border-lime-300"
                : "border-gray-400 hover:bg-gray-100 dark:hover:bg-darkHover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            >
              <div className="relative w-full h-60">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-lime-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default WorkPage
