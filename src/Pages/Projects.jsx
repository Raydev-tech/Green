import { FaLeaf } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    { src: "https://i.pinimg.com/236x/b0/f0/e7/b0f0e72833a7be8a39aa6b026ff57865.jpg", type: "Flower Garden" },
    { src: "https://i.pinimg.com/236x/ce/1a/d8/ce1ad80ba79c90266ea7e922e0063a26.jpg", type: "Landscape Design" },
    { src: "https://i.pinimg.com/236x/97/fa/b3/97fab3e52e3687827986447e70f98f74.jpg", type: "Vegetable Garden" },
    { src: "https://i.pinimg.com/236x/f8/a5/79/f8a57967b18ca3acd4a5e50f16a6ace0.jpg", type: "Bonsai Collection" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Image Grid */}
          <div className="md:col-span-8 grid grid-cols-2 gap-4">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={project.src}
                  alt={`Garden project ${index + 1}`}
                  className="w-full h-auto md:w-64 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Plant Type Label */}
                <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded">
                  {project.type}
                </div>
              </div>
            ))}
          </div>

          {/* Text Section */}
          <div className="md:col-span-4 flex flex-col justify-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              A peek at our <span className="text-yellow-500">landscape creations</span>
            </h2>

            <p className="text-gray-600 mb-6">
              Explore our portfolio of completed projects, showcasing the diversity and quality of our landscaping
              work across residential and commercial properties.
            </p>

            {/* Button with Icon */}
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md transition-all">
              <FaLeaf className="text-lg" />
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
