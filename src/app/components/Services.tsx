import { motion } from "motion/react";
import { Sparkles, Film, Palette, Zap, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Film,
      title: "3D Animation",
      description: "Bring your ideas to life in 3D! We focus on creativity, learning, and fun while making detailed animations.",
      features: ["Character Animation", "World & Environment Design", "Modeling & Rigging", "Rendering & Scenes"],
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Make your ideas move! Fun motion graphics for videos, presentations, and social media.",
      features: ["Animated Logos", "Text & Typing Effects", "Short Explainer Clips", "Social Media Videos"],
    },
    {
      icon: Palette,
      title: "2D Animation",
      description: "Colorful and creative storytelling! Perfect for school projects or simple animations.",
      features: ["Character Design", "Frame-by-Frame Animation", "Digital Drawing & Illustration", "Storyboards"],
    },
    {
      icon: Sparkles,
      title: "Visual Effects (VFX)",
      description: "Add cool effects to your videos! Make your animations and videos more exciting.",
      features: ["Simple CGI & Compositing", "Particles & Fun Effects", "Color Adjustments", "Screen Enhancements"],
    },
    {
      icon: Package,
      title: "Brand & Identity",
      description: "Help your project or brand look unique! Simple designs and animations that stand out.",
      features: ["Logo & Mascot Design", "Style Frames", "Simple Motion Graphics", "Visual Guides"],
    },
    {
      icon: TrendingUp,
      title: "Video Production",
      description: "Turn your ideas into videos! Perfect for school projects, promos, or social media content.",
      features: ["Story & Script Ideas", "Animation & Editingt", "Music & Sound Effects", "Social Media Ready Clips"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Brainstorm & Research",
      description: "We start by understanding the project requirements, exploring ideas, and thinking critically about the story and goals.",
    },
    {
      number: "02",
      title: "Script & Storyboarding",
      description: "We write the script and create storyboards to map out the scenes, actions, and flow of the animation.",
    },
    {
      number: "03",
      title: "Pre-Production",
      description: "We prepare all assets, designs, character sketches, and style frames to set the stage for production.",
    },
    {
      number: "04",
      title: "Production",
      description: "We bring the project to life! Animation, rigging, modeling, and visual effects are created according to the storyboard.",
    },
    {
      number: "05",
      title: "Post-Production",
      description: "We edit, add sound, color grade, and refine every detail to make the final output smooth and polished.",
    },
     {
      number: "06",
      title: "Showcase & Delivered",
      description: "From concept to completion, your project is polished, finalized, and ready to be showcased—perfect for submission, sharing online, or adding to your portfolio.",
    },
  ];

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
              Our <span className="text-purple-400">Services</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We create animations, character designs, and creative projects that bring ideas to life. 
              Every project is a chance for our team to experiment, learn, and share our creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-500">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-400">Process</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Step-by-step guide to turning your ideas into polished animations
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 -translate-y-1/2" />

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h3>
                    <p className="text-zinc-400 text-sm text-center lg:text-left">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-purple-400">AetherLight Studio</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Creative & Passionate Team",
                    description: "We’re a group of students who love bringing ideas to life. Every project is a chance to learn, experiment, and make something amazing.",
                  },
                  {
                    title: "Hands-On Learning",
                    description: "We combine creativity with critical thinking, from scripting and storyboarding to production and post-production, ensuring every detail reflects our effort and learning.",
                  },
                  {
                    title: "Up-to-Date Tools",
                    description: "We work with modern animation and design software to create polished projects that meet current standards.",
                  },
                  {
                    title: "Your Vision, Our Focus",
                    description: "We collaborate closely with you to turn your ideas into animations that communicate your story clearly and creatively.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-500/20"
            >
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
              <p className="text-zinc-400 mb-8">
                Let’s bring your ideas to life! From planning and design to final animations, we’ll help turn your creative concepts into a polished showcase that’s ready to share with your audience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Step-by-step guidance from concept to final animation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Support and feedback throughout your project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Tips and assistance to share your work online or in class</span>
                </div>
              </div>
              <Link
              to="/contact#contact-section"
              className="mt-8 w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all block text-center"
            >
              Start Your Project
            </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
