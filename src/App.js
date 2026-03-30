import React from "react";
import { motion } from "framer-motion";

export default function JaiswalTexTech() {
  const products = [
    { name: "Textured Sweater", img: "/images/brown.png" },
    { name: "Beige Knit Sweater", img: "/images/beige.png" },
    { name: "Knit Polo", img: "/images/grey.png" },
    { name: "Knit Shirt", img: "/images/shirt.png" },
  ];

  return (
    <div className="bg-[#f8f6f2] text-gray-900 font-sans">
      {/* NAVBAR */}
      <div className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur text-white flex justify-between px-6 py-4">
        <div className="font-semibold tracking-wide">Jaiswal TexTech</div>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* HERO (UPDATED PREMIUM BANNER) */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1600"
          alt="Premium knitwear manufacturing fabric texture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Flat Knitwear
            <br /> Manufacturing
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-gray-200">
            Premium textured knitwear built for brands that move fast.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <a href="#work" className="bg-white text-black px-6 py-3 rounded-full">
              View Work
            </a>
            <a
              href="https://wa.me/917977956408"
              className="border px-6 py-3 rounded-full"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold">About Jaiswal TexTech</h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Based in Thane, Maharashtra — we manufacture premium flat knitwear for fashion brands.
            Our strength lies in textures, structure, and clean finishing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            "Low MOQ",
            "Fast Sampling",
            "20–30 Days Production",
            "Premium Finishing",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES (NEW PREMIUM SECTION) */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold">Product Categories</h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Textured Sweaters", desc: "Heavy & mid-weight premium knits" },
            { title: "Knit Polos", desc: "Structured modern silhouettes" },
            { title: "Knit Shirts", desc: "Lightweight refined textures" },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#f8f6f2] rounded-3xl">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="work" className="py-24 px-6 bg-[#f8f6f2]">
        <h2 className="text-4xl font-semibold text-center">Selected Work</h2>

        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4 text-white">
                {p.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-semibold text-center">Our Process</h2>
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            { title: "Concept", desc: "Share your idea" },
            { title: "Sampling", desc: "Fast development" },
            { title: "Production", desc: "20–30 day cycle" },
            { title: "Delivery", desc: "QC & dispatch" },
          ].map((step, i) => (
            <div key={i} className="p-6">
              <div className="text-xl font-semibold">{step.title}</div>
              <p className="text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATION (REPLACED CLIENTS + TESTIMONIAL) */}
      <section className="py-24 bg-[#f1ede7] px-6 text-center">
        <h2 className="text-4xl font-semibold">Why Brands Work With Us</h2>
        <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            "Strong texture development capability",
            "Fast turnaround for new collections",
            "Consistent premium finishing",
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold">Start Your Next Collection</h2>
        <p className="mt-6 text-gray-300">
          From sampling to production — we move fast with quality.
        </p>
        <a
          href="https://wa.me/917977956408"
          className="mt-8 inline-block bg-white text-black px-8 py-3 rounded-full"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Jaiswal TexTech</div>
        <div className="mt-2">Thane, Maharashtra | Flat Knitwear Manufacturer</div>
      </footer>
    </div>
  );
}
