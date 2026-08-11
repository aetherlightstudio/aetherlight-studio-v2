import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lawrence1 from "../../assets/lawrence1.jpg";
import lawrence2 from "../../assets/lawrence2.jpg";
import lawrenceVideo from "../../assets/lawrence3.mp4";
import daniel1 from "../../assets/daniel1.jpg";
import daniel2 from "../../assets/daniel2.jpg";
import daniel3 from "../../assets/daniel3.jpg";
import sebasthian1Video from "../../assets/sebasthian1.mp4";
import sebasthian3 from "../../assets/sebasthian3.jpg";
import sebasthian2Video from "../../assets/sebasthian2.mp4";
import darla1 from "../../assets/darla1.jpg";
import darla2 from "../../assets/darla2.jpg";
import darla3 from "../../assets/darla3.jpg";
import justin1 from "../../assets/justin1.jpg";
import justin2 from "../../assets/justin2.jpg";
import justin3 from "../../assets/justin3.jpg";


export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Lawrence's Work", "Daniel's Work", "Sebasthian's Work", "Princess's Work", "Justin's Work"];

  const projects = [
    {
      id: 1,
      title: "3D Character Modelled and Rigged",
      category: "Lawrence's Work",
      image: lawrence1,
      By:"Lawrence Mallari",
    },
    {
      id: 2,
      title: "Motion Graphics Logo",
      category: "Daniel's Work",
      image: daniel1,
      By:"Daniel Gatan",
    },
    {
      id: 3,
      title: "2D Motion Graphics Logo Animation",
      category: "Sebasthian's Work",
      video: sebasthian1Video,
      By:"Sebasthian Ezyquel De Martin",
    },
    {
      id: 4,
      title: "Sample Logos and Poster Designs",
      category: "Princess's Work",
      image: darla1,
      By:"Princess Darla Mae Dayrit",
    },
    {
      id: 5,
      title: "2D Character Designed and Animate",
      category: "Lawrence's Work",
      image: lawrence2,
      By:"Lawrence Mallari",
    },
    {
      id: 6,
      title: "Zombie 3D Animation",
      category: "Daniel's Work",
      image: daniel2,
      By:"Daniel Gatan",
    },
    {
      id: 7,
      title: "VFX Foley 2D and 3D",
      category: "Sebasthian's Work",
      image: sebasthian3,
      By:"Sebasthian Ezyquel De Martin",
    },
    {
      id: 8,
      title: "Sample 2D and 3D Animations",
      category: "Princess's Work",
      image: darla2,
      By:"Princess Darla Mae Dayrit",
    },
    {
      id: 9,
      title: "3D Character Animated",
      category: "Lawrence's Work",
       video: lawrenceVideo,
      By:"Lawrence Mallari",
    },
     {
      id: 10,
      title: "Poster Design 1",
      category: "Justin's Work",
      image: justin1,
      By:"Justin Nathen Bragas",
    },
     {
      id: 11,
      title: "Vogue Magazine Design",
      category: "Justin's Work",
      image: justin2,
      By:"Justin Nathen Bragas",
    },
    {
      id: 12,
      title: "Poster Design 2",
      category: "Justin's Work",
      image: justin3,
      By:"Justin Nathen Bragas",
    },
    {
      id: 13,
      title: "3D Acting Animation",
      category: "Daniel's Work",
      image: daniel3,
      By:"Daniel Gatan",
    },
    {
      id: 14,
      title: "3D Motion Graphics Logo Animation",
      category: "Sebasthian's Work",
      video: sebasthian2Video,
      By:"Sebasthian Ezyquel De Martin",
    },
    {
      id: 15,
      title: "Basic 3D Modelling and Character Designs",
      category: "Princess's Work",
      image: darla3,
      By:"Princess Darla Mae Dayrit",
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-purple-400">Portfolio</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Take a look at the animations, character designs, and creative projects crafted by our talented team. Every piece tells a story!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
              <div className="aspect-[4/5] relative bg-zinc-900 flex items-center justify-center">

              {project.video ? (
                <video
                  controls
                  className="w-full h-full object-contain"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              )}

    {/* Overlay Text */}
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
          {project.category}
        </div>

        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-300">
          By: {project.By}
        </p>
      </div>
    </div>

  </div>
</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our Creative <span className="text-purple-400">Journey</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Creative Works" },
                { number: "5", label: "Team Members" },
                { number: "10+", label: "Animation & Design Projects" },
                { number: "100%", label: "Passion for Creativity" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-zinc-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
