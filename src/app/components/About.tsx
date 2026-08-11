import { motion } from "motion/react";
import { Users, Target, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aetherlightLogo from "../../assets/AETHERLIGHT STUDIO.png";
import lawrenceImg from "../../assets/Lawrence (1).jpg";
import danielImg from "../../assets/Daniel.jpg";
import sebasthianImg from "../../assets/badings.jpg";
import justinImg from "../../assets/BADING.png";
import princessImg from "../../assets/darlagaga.jpg";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We put creativity and dedication into every project, ensuring that each animation reflects imagination and purpose.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "We value attention to detail, ensuring that every frame and design element contributes to a clear and engaging story.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive to create high-quality animations that inspire, educate, and communicate ideas effectively.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe great ideas grow through teamwork, collaboration, and shared creativity.",
    },
  ];

  const team = [
  { name: "Lawrence Mallari", role: "2D | 3D Animator", specialty: "Programming", image: lawrenceImg },
  { name: "Daniel Gatan", role: "3D Animator | Visual Artist", specialty: "3D Animation", image: danielImg },
  { name: "Sebasthian Ezyquel De Martin", role: "Art Director | VFX Artists", specialty: "Visual Development", image: sebasthianImg },
  { name: "Justin Nathen Bragas", role: "Graphic Designer | Multimedia Artists", specialty: "Video Editing", image: justinImg },
  { name: "Princess Darla Mae Dayrit", role: "Character Designer | Concept Artists", specialty: "Motion Graphics", image: princessImg },
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
              AetherLight Studio is a creative animation and multimedia studio dedicated to bringing ideas to life through 2D and 3D animation, storytelling, and digital design. We are a team of passionate creators who believe that imagination, emotion, and technology can work together to produce meaningful visual experiences.
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
                Who We Are<span className="text-white-400"></span>
              </h2>
              <div className="space-y-4 text-zinc-400">
                <p>
                  AetherLight Studio is a creative animation and multimedia 
                  studio dedicated to bringing ideas to life through 2D and 3D animation, storytelling, and digital design. 
                  We are a team of passionate creators who believe that imagination, emotion, and technology 
                  can work together to produce meaningful visual experiences.
                </p>
                <p>
                  Rooted in creativity and innovation, our studio focuses on crafting engaging stories, educational content, and visually 
                  compelling animations that inspire, inform, and connect with audiences. From animated films and motion graphics 
                  to interactive and instructional media, we aim to transform complex ideas into simple, clear, and beautiful visuals.
                </p>
                <p>
                  At AetherLight Studio, we don’t just create animations 
                  we build worlds, shape narratives, and illuminate ideas. 
                  Our mission is to spark curiosity, encourage learning, 
                  and push creative boundaries, one frame at a time.
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
              <div className="aspect-[4/3] flex items-center justify-center">
                <div className="w-[85%] h-[83%] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                  <ImageWithFallback
                    src={aetherlightLogo}
                    alt="AetherLight Studio Logo"
                    className="w-full h-full object-contain scale-[.93]"
                  />
                </div>
</div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 max-w-xs">
              <p className="text-sm font-semibold">
                "AetherLight Studio brings creativity, storytelling, and technology together to transform ideas into meaningful visual experiences."
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
              The core values that inspire how we create, collaborate, and bring ideas to life
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
              Meet Our <span className="text-purple-400">Team</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Artists working together to bring ideas to life.
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
  className="group text-center"
>
  <div className="aspect-square rounded-2xl overflow-hidden mb-4">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50 -mt-8">
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
            Our mission is to design and produce high-quality animation-based instructional guides 
            that simplify complex technical concepts, enhance learner engagement, and support competency-based training.
            By collaborating with educational institutions and training organizations such as TESDA, 
            we aim to improve learning outcomes in Computer Systems Servicing (CSS) 
            NC II—beginning with computer network setup through accurate, practical, and learner-centered animated instruction.
          </p>
        </motion.div>
        
        {/* Vision Section */}
<section className="py-30 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-zinc-900/50 mt-18">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Our <span className="text-purple-400">Vision</span>
    </h2>
    <p className="text-xl text-zinc-400 leading-relaxed">
      Our Vision is to become a leading animation studio that transforms technical education through innovative, accessible, 
      and visually engaging instructional content, empowering learners to develop industry-ready skills for the digital workforce.
    </p>
  </motion.div>
</section>
      </section>
    </div>
  );
}
