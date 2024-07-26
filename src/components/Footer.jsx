import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-80 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-blue-400">Space Explorer</h3>
            <p className="font-sans text-blue-200">Exploring the cosmos, one discovery at a time.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">Home</a></li>
              <li><a href="/exploration" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">Exploration</a></li>
              <li><a href="/exoplanets" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">Exoplanets</a></li>
              <li><a href="/technology" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300"><Facebook size={28} /></a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300"><Twitter size={28} /></a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300"><Instagram size={28} /></a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300"><Youtube size={28} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-blue-200">
          <p>&copy; 2024 Space Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
