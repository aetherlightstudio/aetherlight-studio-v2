import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

export function Contact() {

  useEffect(() => {
    const targetSection = document.getElementById("contact-section");

    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: "instant",
          block: "center",
        });
      }, 100);
    }
  }, []);


  // =========================
  // CONTACT INFORMATION
  // =========================

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "studioaetherlight@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+63 900 000 0000",
      link: "tel:+639000000000",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "Olongapo City Sports Complex, Donor Street, East Tapinac Olongapo City, PH 2200",
      link:
        "https://maps.app.goo.gl/NoBr9e3U4M8Wb9NE9",
    },
  ];


  // =========================
  // SOCIAL MEDIA
  // =========================

  const socialLinks = [
    {
      title: "Facebook",
      content: "AetherLight Studio",
      link:
        "https://www.facebook.com/profile.php?id=61589047894356",

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          aria-hidden="true"
        >
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z" />
        </svg>
      ),
    },

    {
      title: "Instagram",
      content: "@aetherlight_studios",
      link:
        "https://www.instagram.com/aetherlight_studios",

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-none stroke-current"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },

    {
      title: "YouTube",
      content: "@AetherLightStudio-v8t",
      link:
        "https://www.youtube.com/@AetherLightStudio-v8t",

      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          aria-hidden="true"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
        </svg>
      ),
    },
  ];


  return (
    <div className="bg-zinc-950 text-white">


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-16"
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-6">

              Animate{" "}

              <span className="text-purple-400">
                With Us
              </span>

            </h1>


            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">

              Turn your ideas into motion! Share your vision, and
              we’ll help you create animations that are ready to
              showcase and share with everyone.

            </p>

          </motion.div>

        </div>

      </section>



      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        id="contact-section"
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12">


            {/* =========================
                OUR SOCIALS
                LEFT SIDE
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              {/* HEADING */}

              <div className="min-h-[128px]">

                <h2
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    leading-tight
                  "
                >
                  Our Socials
                </h2>

                <p className="text-zinc-400">

                  Follow AetherLight Studio and stay connected
                  with our latest creative works, updates,
                  and projects.

                </p>

              </div>


              {/* SOCIAL CARDS */}

              <div className="space-y-6 mt-8">

                {socialLinks.map((social, index) => (

                  <motion.a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"

                    initial={{
                      opacity: 0,
                      x: -20,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className="
                      flex
                      items-center
                      gap-4
                      h-[88px]
                      p-5
                      bg-zinc-900
                      border
                      border-zinc-800
                      rounded-2xl
                      hover:border-purple-500/50
                      transition-all
                      duration-300
                      group
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        w-12
                        h-12
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        group-hover:scale-110
                        transition-transform
                      "
                    >

                      {social.icon}

                    </div>


                    {/* TEXT */}

                    <div className="min-w-0">

                      <h3 className="font-semibold mb-1">

                        {social.title}

                      </h3>

                      <p className="text-zinc-400 text-sm truncate">

                        {social.content}

                      </p>

                    </div>

                  </motion.a>

                ))}

              </div>

            </motion.div>



            {/* =========================
                CONTACT INFORMATION
                RIGHT SIDE
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              {/* HEADING */}

              <div className="min-h-[128px]">

                <h2
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    leading-tight
                  "
                >
                  Contact Information
                </h2>

                <p className="text-zinc-400">

                  Have questions or ideas? Reach out to
                  AetherLight Studio, and let’s create
                  something amazing together.

                </p>

              </div>


              {/* CONTACT CARDS */}

              <div className="space-y-6 mt-8">

                {contactInfo.map((info, index) => {

                  const Icon = info.icon;

                  return (

                    <motion.a
                      key={index}
                      href={info.link}

                      initial={{
                        opacity: 0,
                        x: 20,
                      }}

                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}

                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                      }}

                      viewport={{
                        once: true,
                      }}

                      className="
                        flex
                        items-center
                        gap-4
                        h-[88px]
                        p-5
                        bg-zinc-900
                        border
                        border-zinc-800
                        rounded-2xl
                        hover:border-purple-500/50
                        transition-all
                        duration-300
                        group
                      "
                    >

                      {/* ICON */}

                      <div
                        className="
                          w-12
                          h-12
                          bg-gradient-to-r
                          from-purple-500
                          to-pink-500
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                          group-hover:scale-110
                          transition-transform
                        "
                      >

                        <Icon size={24} />

                      </div>


                      {/* TEXT */}

                      <div className="min-w-0">

                        <h3 className="font-semibold mb-1">

                          {info.title}

                        </h3>

                        <p className="text-zinc-400 text-sm break-words">

                          {info.content}

                        </p>

                      </div>

                    </motion.a>

                  );

                })}

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* =========================
          FAQ SECTION
      ========================= */}

      <section
        className="
          py-24
          px-4
          sm:px-6
          lg:px-8
          bg-zinc-900/50
        "
      >

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-12"
          >

            <h2 className="text-4xl font-bold mb-4">

              Frequently Asked{" "}

              <span className="text-purple-400">
                Questions
              </span>

            </h2>

          </motion.div>


          <div className="space-y-4">

            {[
              {
                q: "How long does it take to complete a project?",
                a: "Our projects usually take 4–12 weeks, depending on how complex the animation or design is. We focus on careful planning and learning along the way!",
              },

              {
                q: "Can we work with clients outside our school or area?",
                a: "Yes! We’re open to collaborating with anyone, locally or online, and can coordinate through email, chat, or video calls.",
              },

              {
                q: "How much do your projects cost?",
                a: "We create custom quotes based on what you need for your project. Just reach out to us, and we’ll give you a clear breakdown!",
              },

              {
                q: "Can you finish a project faster if needed?",
                a: "We can! If you need something done quickly, we’ll do our best to accommodate. Just let us know early so we can plan.",
              },

            ].map((faq, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                "
              >

                <h3 className="text-lg font-bold mb-2">

                  {faq.q}

                </h3>

                <p className="text-zinc-400">

                  {faq.a}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}