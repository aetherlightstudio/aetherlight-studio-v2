import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";


import animationVideo from "../../assets/3Danimation.mp4" 
import capstoneVideo from "../../assets/capstone1.mp4" 

import lawrence3 from "../../assets/lawrence3.jpg";
import POSTER from "../../assets/POSTER.png"

import sebasthian4 from "../../assets/sebasthian4.jpg";
import sebasthian1Video from "../../assets/sebasthian1.mp4";
import sebasthian2Video from "../../assets/sebasthian2.mp4";

import mg2Video from "../../assets/mg2.mp4";
import darla4 from "../../assets/darla4.jpg";

import justin4 from "../../assets/justin4.jpg";
import poster from "../../assets/poster.jpg";

import animationThumb from "../../assets/3Danimation-thumb.jpg";
import capstoneThumb from "../../assets/capstone1-thumb.jpg";
import mg2Thumb from "../../assets/mg2-thumb.jpg";
import sebasthian1Thumb from "../../assets/sebasthian1-thumb.jpg";
import sebasthian2Thumb from "../../assets/sebasthian2-thumb.jpg";

export function Portfolio() {

  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
  const section = searchParams.get("section");

  if (!section) return;

  setSelectedCategory("All");

  requestAnimationFrame(() => {
    const targetSection = document.getElementById(section);

    if (targetSection) {
      targetSection.scrollIntoView({
        block: "start",
      });
    }
  });

}, [searchParams]);

  // PORTFOLIO CATEGORIES
  const categories = [
    "All",
    "Animation",
    "Graphic Design",
    "Motion Graphics",
  ];

  // PORTFOLIO PROJECTS
  const projects = [

    {
      id: 1,
      title: "3D Animation — The Fantabulous Mind of a Wunderkind",
      category: "Animation",
      video: animationVideo,
      image: animationThumb,
      By: "AetherLight Studio",
    },

    {
      id: 5,
      title: "Capstone Project — Animated Instructional Guide for CORE II: Setup Computer Networks in TESDA CSS NC II",
      category: "Animation",
      video: capstoneVideo,
      image: capstoneThumb,
      By: "AetherLight Studio",
    },

    {
      id: 2,
      title: "Motion Graphics",
      category: "Motion Graphics",
      video: mg2Video,
      image: mg2Thumb,
      By: "Lawrence & Daniel",
    },

    {
      id: 3,
      title: "Motion Graphics",
      category: "Motion Graphics",
      video: sebasthian1Video,
      image: sebasthian1Thumb,
      By: "Princess Darla Mae Dayrit",
    },
    
    {
      id: 14,
      title: "Motion Graphics",
      category: "Motion Graphics",
      video: sebasthian2Video,
      image: sebasthian2Thumb,
      By: "Sebasthian & Justin",
    },

    {
      id: 11,
      title: "Poster",
      category: "Graphic Design",
      image: poster,
      By: "AetherLight Studio",
    },

    

    {
      id: 10,
      title: "Poster",
      category: "Graphic Design",
      image: justin4,
      By: "Justin Nathen Bragas",
    },

    {
      id: 4,
      title: "Poster",
      category: "Graphic Design",
      image: darla4,
      By: "Princess Darla Mae Dayrit",
    },
    
    {
      id: 6,
      title: "Poster",
      category: "Graphic Design",
      image: POSTER,
      By: "Daniel Gatan",
    },
     
    {
      id: 7,
      title: "Poster",
      category: "Graphic Design",
      image: sebasthian4,
      By: "Sebasthian Ezyquel De Martin",
    },
    
    {
      id: 8,
      title: "Poster",
      category: "Graphic Design",
      image: lawrence3,
      By: "Lawrence Mallari",
    },

  

  ];


  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );


  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6">

              Our{" "}

              <span className="text-purple-400">
                Portfolio
              </span>

            </h1>


            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">

              Explore our team's creative work in animation,
              digital design, motion graphics, and 3D production.

            </p>

          </motion.div>

        </div>

      </section>



      {/* =========================
          CATEGORY FILTER
      ========================= */}

      <section
          id="portfolio-categories"
          className="pb-12 px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}

                className={`
                  px-5 py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20"
                      : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-purple-500/50"
                  }
                `}
              >

                {category}

              </button>

            ))}

          </motion.div>

        </div>

      </section>



      {/* =========================
    PORTFOLIO GRID
========================= */}

<section className="pb-24 px-4 sm:px-6 lg:px-8">

  <div className="max-w-7xl mx-auto">

    {selectedCategory === "All" ? (

      /* =================================
         ALL — ORGANIZED BY CATEGORY
      ================================= */

      <div className="space-y-20">

        {categories
          .filter((category) => category !== "All")
          .map((category) => {

            const categoryProjects = projects.filter(
              (project) => project.category === category
            );

            return (
              <motion.div
                key={category}
                id={category.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-24"
                layout
              >

                {/* CATEGORY HEADER */}

                <div className="mb-8">

                  <div className="flex items-center gap-4">

                    <div className="w-2 h-10 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />

                    <div>

                      <h2 className="text-3xl md:text-4xl font-bold">
                        {category}
                      </h2>

                      <p className="text-zinc-500 mt-1">
                        {categoryProjects.length}{" "}
                        {categoryProjects.length === 1
                          ? "project"
                          : "projects"}
                      </p>

                    </div>

                  </div>

                </div>


                {/* CATEGORY PROJECTS */}

                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >

                  <AnimatePresence mode="popLayout">

                    {categoryProjects.map((project, index) => (

                      <motion.div
                        key={project.id}
                        layout

                        initial={{
                          opacity: 0,
                          y: 30
                        }}

                        animate={{
                          opacity: 1,
                          y: 0
                        }}

                        exit={{
                          opacity: 0,
                          scale: 0.95
                        }}

                        transition={{
                          duration: 0.4,
                          delay: index * 0.05
                        }}

                        className="group"
                      >

                        {/* CLICKABLE CARD */}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-full text-left cursor-pointer"
                        >

                          <div
                            className="
                              relative
                              overflow-hidden
                              rounded-2xl
                              bg-zinc-900
                              border
                              border-zinc-800
                              hover:border-purple-500/50
                              transition-all
                              duration-300
                              hover:-translate-y-2
                              hover:shadow-xl
                              hover:shadow-purple-500/10
                            "
                          >

                            {/* MEDIA */}

                            <div
                              className="
                                aspect-[4/3]
                                relative
                                flex
                                items-center
                                justify-center
                                overflow-hidden
                                bg-zinc-900
                              "
                            >

                              {project.video ? (

                              <img
                                src={project.image}
                                alt={project.title}
                                className="
                                  w-full
                                  h-full
                                  object-contain
                                  transition-transform
                                  duration-500
                                  group-hover:scale-105
                                "
                              />

                            ) : (

                                <ImageWithFallback
                                  src={project.image}
                                  alt={project.title}

                                  className="
                                    w-full
                                    h-full
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:scale-105
                                  "
                                />

                              )}


                              {/* HOVER OVERLAY */}

                              <div
                                className="
                                  absolute
                                  inset-0
                                  bg-gradient-to-t
                                  from-zinc-950
                                  via-zinc-950/20
                                  to-transparent
                                  opacity-0
                                  group-hover:opacity-100
                                  transition-opacity
                                  duration-300
                                "
                              />


                              {/* VIEW PROJECT */}

                              <div
                                className="
                                  absolute
                                  inset-0
                                  flex
                                  items-center
                                  justify-center
                                  opacity-0
                                  group-hover:opacity-100
                                  transition-opacity
                                  duration-300
                                "
                              >

                                <span
  className="
    px-5
    py-2.5
    rounded-full
    bg-gradient-to-r
    from-purple-500
    to-pink-500
    text-white
    border
    border-transparent
    text-sm
    font-medium
    transition-all
    duration-300
    group-hover:scale-105
    group-hover:shadow-lg
    group-hover:shadow-purple-500/50
  "
>
  View Project
</span>

                              </div>

                            </div>


                            {/* PROJECT INFORMATION */}

                            <div className="p-5">

                              <div
                                className="
                                  inline-block
                                  px-3
                                  py-1
                                  rounded-full
                                  bg-purple-500/10
                                  border
                                  border-purple-500/20
                                  text-purple-400
                                  text-xs
                                  font-medium
                                  mb-3
                                "
                              >

                                {project.category}

                              </div>


                              <h3
                                className="
                                  text-lg
                                  font-semibold
                                  mb-2
                                  text-white
                                "
                              >

                                {project.title}

                              </h3>


                              <p className="text-sm text-zinc-500">

                                By: {project.By}

                              </p>

                            </div>

                          </div>

                        </button>

                      </motion.div>

                    ))}

                  </AnimatePresence>

                </motion.div>

              </motion.div>
            );
          })}

      </div>

    ) : (

      /* =================================
         INDIVIDUAL CATEGORY
      ================================= */

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >

        <AnimatePresence mode="popLayout">

          {filteredProjects.map((project, index) => (

            <motion.div
              key={project.id}
              layout

              initial={{
                opacity: 0,
                y: 30
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                scale: 0.95
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}

              className="group"
            >

              {/* CLICKABLE CARD */}

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left cursor-pointer"
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    bg-zinc-900
                    border
                    border-zinc-800
                    hover:border-purple-500/50
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    hover:shadow-purple-500/10
                  "
                >

                  {/* MEDIA */}

                  <div
                    className="
                      aspect-[4/3]
                      relative
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      bg-zinc-900
                    "
                  >

                    {project.video ? (

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  ) : (
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}

                        className="
                          w-full
                          h-full
                          object-contain
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                    )}


                    {/* HOVER OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-zinc-950
                        via-zinc-950/20
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    />


                    {/* VIEW PROJECT */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    >

                      <span
  className="
    px-5
    py-2.5
    rounded-full
    bg-gradient-to-r
    from-purple-500
    to-pink-500
    text-white
    border
    border-transparent
    text-sm
    font-medium
    transition-all
    duration-300
    group-hover:scale-105
    group-hover:shadow-lg
    group-hover:shadow-purple-500/50
  "
>
  View Project
</span>

                    </div>

                  </div>


                  {/* PROJECT INFORMATION */}

                  <div className="p-5">

                    <div
                      className="
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        text-purple-400
                        text-xs
                        font-medium
                        mb-3
                      "
                    >

                      {project.category}

                    </div>


                    <h3
                      className="
                        text-lg
                        font-semibold
                        mb-2
                        text-white
                      "
                    >

                      {project.title}

                    </h3>


                    <p className="text-sm text-zinc-500">

                      By: {project.By}

                    </p>

                  </div>

                </div>

              </button>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

    )}

  </div>

</section>



      {/* =========================
          CREATIVE JOURNEY
      ========================= */}

      <section className="
        py-20
        px-4
        sm:px-6
        lg:px-8
        bg-gradient-to-b
        from-transparent
        to-zinc-900/50
      ">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            viewport={{
              once: true
            }}

            className="text-center"
          >

            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              mb-12
            ">

              Our Creative{" "}

              <span className="text-purple-400">
                Journey
              </span>

            </h2>


            <div className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
            ">

              {[
                {
                  number: "11+",
                  label: "Creative Works"
                },

                {
                  number: "5",
                  label: "Team Members"
                },

                {
                  number: "10+",
                  label: "Animation & Design Projects"
                },

                {
                  number: "100%",
                  label: "Passion for Creativity"
                }

              ].map((stat, index) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 20
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}

                  viewport={{
                    once: true
                  }}
                >

                  <div className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    bg-gradient-to-r
                    from-purple-400
                    to-pink-400
                    bg-clip-text
                    text-transparent
                    mb-2
                  ">

                    {stat.number}

                  </div>


                  <div className="text-zinc-400">

                    {stat.label}

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>



      {/* =========================
          PROJECT EXPAND / MODAL
      ========================= */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            onClick={() => setSelectedProject(null)}

            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 0.9
              }}

              transition={{
                duration: 0.3
              }}

              onClick={(e) => e.stopPropagation()}

              className="
                relative
                w-full
                max-w-5xl
                max-h-[90vh]
                overflow-auto
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                shadow-2xl
              "
            >

              {/* CLOSE BUTTON */}

              <button
                onClick={() => setSelectedProject(null)}

                className="
                  absolute
                  top-4
                  right-4
                  z-10
                  w-10
                  h-10
                  rounded-full
                  bg-black/70
                  backdrop-blur-md
                  border
                  border-white/10
                  text-white
                  text-xl
                  hover:bg-purple-500
                  transition-colors
                "
              >

                ×

              </button>



              {/* LARGE MEDIA */}

              <div className="
                bg-zinc-900
                flex
                items-center
                justify-center
                min-h-[300px]
                max-h-[65vh]
              ">

                {selectedProject.video ? (

                  <video
                    controls
                    autoPlay
                    className="
                      max-w-full
                      max-h-[65vh]
                      object-contain
                    "
                  >

                    <source
                      src={selectedProject.video}
                      type="video/mp4"
                    />

                  </video>

                ) : (

                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}

                    className="
                      max-w-full
                      max-h-[65vh]
                      object-contain
                    "
                  />

                )}

              </div>



              {/* PROJECT DETAILS */}

              <div className="p-6 md:p-8">

                <div className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  bg-purple-500/10
                  border
                  border-purple-500/20
                  text-purple-400
                  text-sm
                  mb-4
                ">

                  {selectedProject.category}

                </div>


                <h2 className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  mb-3
                ">

                  {selectedProject.title}

                </h2>


                <p className="text-zinc-400">

                  Created by{" "}

                  <span className="text-white">

                    {selectedProject.By}

                  </span>

                </p>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}