import { motion } from "motion/react";
import { Users, Target, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every frame, creating animations that resonate.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail is our hallmark, ensuring perfection in every project.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning quality drives us to exceed expectations consistently.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to bring their unique visions to life.",
    },
  ];

  const team = [
    { name: "Sarah Mitchell", role: "Creative Director", specialty: "Character Design" },
    { name: "James Chen", role: "Lead Animator", specialty: "3D Animation" },
    { name: "Emily Rodriguez", role: "Art Director", specialty: "Visual Development" },
    { name: "Marcus Johnson", role: "Senior Animator", specialty: "Motion Graphics" },
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
              About <span className="text-purple-400">Us</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              A team of passionate artists and storytellers dedicated to pushing
              the boundaries of animation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-purple-400">Story</span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  Founded in 2016, AnimaStudio began with a simple vision: to create
                  animations that don't just look beautiful, but tell compelling
                  stories that move people.
                </p>
                <p>
                  What started as a small team of three passionate animators has
                  grown into an award-winning studio with over 50 talented artists,
                  designers, and storytellers. We've had the privilege of working
                  with some of the world's most recognized brands and
                  entertainment companies.
                </p>
                <p>
                  Today, we continue to innovate and push the boundaries of what's
                  possible in animation, blending cutting-edge technology with
                  timeless storytelling principles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTA0ODAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 max-w-xs">
                <p className="text-sm font-semibold">
                  "Creating visual magic that inspires and entertains audiences
                  worldwide."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-400">Values</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              The principles that guide everything we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the <span className="text-purple-400">Team</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Talented artists bringing creativity to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-1">{member.role}</p>
                <p className="text-zinc-500 text-sm">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-purple-400">Mission</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            To craft extraordinary animations that captivate audiences, amplify
            brand messages, and push the boundaries of visual storytelling. We
            believe in the power of animation to inspire, entertain, and create
            lasting emotional connections.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
