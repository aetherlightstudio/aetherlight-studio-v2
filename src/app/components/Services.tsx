import { motion } from "motion/react";
import { Sparkles, Film, Palette, Zap, Package, TrendingUp } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Film,
      title: "3D Animation",
      description: "Breathtaking 3D animations that bring characters and worlds to life with stunning detail and realism.",
      features: ["Character Animation", "Environment Design", "Rigging & Modeling", "Rendering"],
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description: "Dynamic motion graphics that captivate audiences and communicate your message with impact.",
      features: ["Logo Animation", "Kinetic Typography", "Explainer Videos", "Social Media Content"],
    },
    {
      icon: Palette,
      title: "2D Animation",
      description: "Charming 2D animations with artistic flair, perfect for storytelling and brand communication.",
      features: ["Character Design", "Frame-by-Frame", "Digital Illustration", "Storyboarding"],
    },
    {
      icon: Sparkles,
      title: "Visual Effects",
      description: "Industry-leading VFX that seamlessly blend reality with imagination for stunning visual impact.",
      features: ["Compositing", "CGI Integration", "Particle Effects", "Color Grading"],
    },
    {
      icon: Package,
      title: "Brand Identity",
      description: "Comprehensive brand animation packages that establish and elevate your visual identity.",
      features: ["Brand Guidelines", "Style Frames", "Animation Systems", "Asset Libraries"],
    },
    {
      icon: TrendingUp,
      title: "Commercial Production",
      description: "Full-service commercial production from concept to final delivery, optimized for all platforms.",
      features: ["Creative Strategy", "Script Development", "Production", "Post-Production"],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your vision, goals, and target audience to craft the perfect creative strategy.",
    },
    {
      number: "02",
      title: "Concept",
      description: "Our team develops initial concepts, storyboards, and style frames to visualize the final product.",
    },
    {
      number: "03",
      title: "Production",
      description: "With approved concepts, we bring your project to life through animation, design, and effects.",
    },
    {
      number: "04",
      title: "Refinement",
      description: "We collaborate closely with you to refine and polish every detail until it's perfect.",
    },
    {
      number: "05",
      title: "Delivery",
      description: "Final assets are delivered in all required formats, optimized for your specific needs.",
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
              From concept to completion, we offer comprehensive animation and
              creative services tailored to your needs.
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
              A streamlined approach to creating exceptional animations
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
                Why Choose <span className="text-purple-400">AnimaStudio</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Award-Winning Quality",
                    description: "Our work has been recognized with 15+ industry awards for excellence in animation.",
                  },
                  {
                    title: "Experienced Team",
                    description: "Over 50 talented artists with decades of combined experience in animation and VFX.",
                  },
                  {
                    title: "Cutting-Edge Technology",
                    description: "We utilize the latest tools and techniques to deliver stunning, modern animations.",
                  },
                  {
                    title: "Client-Focused",
                    description: "Your vision is our priority. We collaborate closely to ensure your complete satisfaction.",
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
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-zinc-400 mb-8">
                Let's discuss your project and bring your creative vision to life with stunning animation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Detailed project proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Flexible payment options</span>
                </div>
              </div>
              <button className="mt-8 w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Schedule a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
