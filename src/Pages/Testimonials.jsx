import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily R.",
      feedback: "Absolutely stunning work! My garden looks better than ever!",
      image: "https://i.pravatar.cc/100?img=9",
    },
    {
      name: "Michael B.",
      feedback: "Professional, creative, and efficient! Highly recommended.",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      name: "Sophia L.",
      feedback: "Transformed my backyard into a paradise! Love it!",
      image: "https://i.pravatar.cc/100?img=5",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800" data-aos="fade-up">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-green-50 rounded-lg shadow-lg text-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <FaQuoteLeft className="text-green-500 text-2xl mb-3" />
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <div className="mt-4 flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
