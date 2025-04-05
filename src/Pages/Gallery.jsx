import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryAndBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const galleryImages = [
    "https://i.pinimg.com/236x/b0/f0/e7/b0f0e72833a7be8a39aa6b026ff57865.jpg",
    "https://i.pinimg.com/236x/ce/1a/d8/ce1ad80ba79c90266ea7e922e0063a26.jpg",
    "https://i.pinimg.com/236x/97/fa/b3/97fab3e52e3687827986447e70f98f74.jpg",
    "https://i.pinimg.com/236x/f8/a5/79/f8a57967b18ca3acd4a5e50f16a6ace0.jpg",
  ];

  const blogPosts = [
    {
      title: "5 Essential Tips for a Thriving Garden",
      image: "https://i.pinimg.com/236x/a4/07/39/a407399bb59ef591cf45fb83b96331f0.jpg",
      excerpt: "Discover the top gardening secrets to maintain a lush and beautiful garden all year round.",
    },
    {
      title: "Organic Gardening: Benefits & Techniques",
      image: "https://i.pinimg.com/236x/b3/4a/37/b34a37c58cf4fd8f8c4df579c0587cad.jpg",
      excerpt: "Learn how to grow your own organic vegetables and flowers without chemicals.",
    },
    {
      title: "Best Plants for Low-Maintenance Gardens",
      image: "https://i.pinimg.com/474x/b0/4c/35/b04c35b0a16e1a8fcabf9b2fc1f41776.jpg",
      excerpt: "Find out which plants require minimal effort while keeping your garden fresh and vibrant.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Gallery Section */}
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
          Our <span className="text-green-600">Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
          Latest <span className="text-green-600">Blog Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a href="#" className="text-green-600 font-semibold mt-4 inline-block">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryAndBlog;
