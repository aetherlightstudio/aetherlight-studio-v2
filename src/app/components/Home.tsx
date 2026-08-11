import { motion } from "motion/react";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import animImg from "../../assets/animation.jpg";
import designImg from "../../assets/digital-design (1).jpg";
import storyImg from "../../assets/storytelling.jpg";

export function Home() {
  const portfolio = [
  {
    id: 1,
    title: "We bring ideas to life through engaging and expressive animation that captures stories and emotions.",
    category: "Animation",
    image: animImg,
  },
    {
      id: 2,
    title: "We create visually compelling designs that communicate ideas with clarity and creativity.",
    category: "Digital Design",
    image: designImg,
    },
    {
      id: 3,
    title: "We transform imagination into meaningful visual narratives that inspire and connect with audiences.",
    category: "Visual Storytelling",
    image: storyImg,
    },
  ];

  return (
    <div className="bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-950 to-pink-900/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="text-purple-400" size={32}/>
            <span className="text-purple-400 text-base sm:text-lg uppercase tracking-wider">
              We Are AetherLight
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Where Ideas 
            </span>
            <br />
            <span className="text-white">Come to Light</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            The word “Light” symbolizes clarity, inspiration, and creativity. 
            At AetherLight Studio, it represents our mission to transform ideas into meaningful visual stories through animation and digital design.
            “Where Ideas Come to Light” reflects our commitment to bringing imagination to life turning concepts into motion, stories, 
            and experiences that inspire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Our Creations
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Play size={20} />
              Start Your Project 
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <p className="text-s text-zinc-500 mb-5">Creative Tools We Use</p>
            <div className="flex items-center justify-center gap-6 flex-wrap opacity-40">
              <span className="text-2xl font-bold">BLENDER</span>
              <span className="text-2xl font-bold">PHOTOSHOP</span>
              <span className="text-2xl font-bold">AFTER EFFECTS</span>
              <span className="text-2xl font-bold">ILLUSTRATOR</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Do <span className="text-white-400"></span>
            </h2>
            <p className="text-zinc-400 text-lg">
              At AetherLight Studio, we specialize in creating visually engaging stories through animation and digital design. 
              Our team combines creativity, storytelling, and modern technology to transform ideas into meaningful visual experiences.
              From concept development to final production, we bring imagination to life with passion and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-purple-400 text-xl mb-2">{item.category}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Our Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

      {[
        { title: "Imagination Driven", desc: "Turning creative ideas into visual stories" },
        { title: "Animation Craft", desc: "Exploring motion, characters, and digital worlds" },
        { title: "Visual Design", desc: "Creating engaging and expressive visuals" },
        { title: "Story First", desc: "Every project begins with a story worth telling" },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center max-w-xs mx-auto"
        >

          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            {item.title}
          </h3>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Have an Idea You Want to
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bring to Life?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Let’s collaborate and turn your ideas into engaging animations and creative visual stories.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Collaborate With Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}