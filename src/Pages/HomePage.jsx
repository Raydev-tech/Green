import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaArrowRight } from "react-icons/fa";
import { MoveRight, Leaf, TreeDeciduous, Scissors, LandPlot, } from "lucide-react";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import GalleryAndBlog from "./Gallery";

const services = [
    {
      title: "Maintenance",
      description:
        "Regular garden maintenance including weeding, soil care, and seasonal clean-ups to keep your outdoor space thriving.",
      icon: <Leaf className="text-green-600" size={24} />, // Using Lucide icons
    },
    {
      title: "Tree Care",
      description:
        "Professional tree care services including planting, trimming, disease treatment, and health assessments for all tree species.",
      icon: <TreeDeciduous className="text-green-600" size={24} />, 
    },
    {
      title: "Pruning",
      description:
        "Expert pruning services to enhance plant health, promote growth, and maintain the aesthetic appeal of your garden.",
      icon: <Scissors className="text-green-600" size={24} />,
    },
    {
      title: "Landscaping",
      description:
        "Complete landscaping solutions from design to implementation, creating beautiful outdoor spaces tailored to your vision.",
      icon: <LandPlot className="text-green-600" size={24} />,
    },
];

const stats = [
  { value: 350, label: "Completed Projects" },
  { value: 12, label: "Years Experience" },
  { value: 5, label: "Testimonials" },
];

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <section className="relative h-[500px] md:h-[600px] overflow-hidden" data-aos="fade-up">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/originals/81/7f/74/817f745208278da3d1a71f910cc9ab47.jpg"
          alt="Beautiful landscaped garden"
          className="object-cover w-full h-full brightness-75"
        />
      </div>

      {/* Overlay & Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Landscaping & Smart <br />
            Green Solutions
          </h2>

          {/* Updated Button with Icon */}
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold mt-4 py-2 px-6 rounded-lg transition duration-300">
            Projects <FaArrowRight className="text-lg" />
          </button>
        </div>

        {/* Services Preview Card */}
        <div
          className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-lg hidden md:flex items-center gap-4"
          data-aos="fade-left"
        >
          <div className="relative w-48 h-32 overflow-hidden rounded-lg">
            <img
              src="https://i.pinimg.com/originals/69/cf/f9/69cff93ee7fd7be2769b011062b95302.jpg"
              alt="Garden service preview"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-white">
            <p className="text-sm font-semibold mb-1">Get Services</p>
            <p className="text-xs text-white/80">Contact Consultants</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center" data-aos="fade-up">
          <p className="text-green-600 text-sm font-medium mb-2 uppercase tracking-wider">What we offer</p>
          <h2 className="text-3xl font-bold text-gray-800">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a href="#" className="text-green-600 text-sm font-medium flex items-center group">
                Read more <MoveRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md">
            Services
          </button>
        </div>
      </div>
    </section>
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <p className="text-green-600 text-sm font-medium mb-2 uppercase tracking-wider">About Us</p>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              A beautiful garden is
              <br />a work of <span className="text-yellow-500">art</span>.
            </h2>
            <p className="text-gray-600 mb-6">
              Every garden tells a story, expressing a reflection of its caretaker's vision and passion. With over 12
              years of experience, our team combines artistic design with horticultural expertise to create outdoor
              spaces that inspire and endure.
            </p>
            <p className="text-gray-600 mb-6">
              We believe beautiful landscapes are built on a foundation of sustainable practices, quality materials,
              and attention to detail. From concept to completion, we work closely with our clients to bring their
              garden dreams to life.
            </p>
            <button className="bg-[#1e4d36] hover:bg-[#163a28] text-white px-6 py-3 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>

          <div className="md:w-1/2" data-aos="fade-left">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/b0/60/2b/b0602b63a7520f59dcb0598cf2090301.jpg?height=500&width=600"
                alt="Gardener working with plants"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 bg-[#1e4d36] text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3
          className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400"
          data-aos="fade-up"
        >
          What We Did So Far
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-[#2b6b4e] rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <p className="text-4xl md:text-5xl font-bold text-yellow-500">
                {stat.value}+
              </p>
              <p className="text-sm uppercase tracking-wider mt-2 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Projects />
    <GalleryAndBlog />
    <Testimonials />
    <section className="py-16 bg-green-50" data-aos="fade-up">
  <div className="container mx-auto px-4 md:px-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-gray-800" data-aos="fade-right">
      Ready to transform your outdoor space?
    </h2>
    <p className="text-gray-600 mb-8 max-w-2xl mx-auto" data-aos="fade-left">
      Contact our team of experts today for a consultation and let us help you create the garden of your dreams.
    </p>
    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded shadow-md transition-all"
      data-aos="zoom-in"
    >
      Get in Touch
    </button>
  </div>
</section>

    </>
  );
}
