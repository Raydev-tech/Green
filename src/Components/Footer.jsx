import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e4d36] text-white py-12" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-xl font-bold">Gardener</h1>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Professional landscaping and garden maintenance services for residential and commercial properties.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-300 text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-green-300 text-sm">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-300 text-sm">About Us</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-green-300 text-sm">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Tree Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Pruning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Landscaping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Garden Design</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">📍 123 Garden Street, Green City, 10001</li>
              <li className="text-gray-300 text-sm">📞 +1 (555) 123-4567</li>
              <li className="text-gray-300 text-sm">📧 info@gardener.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} Gardener. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-300 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
