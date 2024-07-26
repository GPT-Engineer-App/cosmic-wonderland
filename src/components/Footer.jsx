import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Space Explorer</h3>
            <p className="text-sm">Exploring the cosmos, one discovery at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/exploration" className="hover:text-blue-300">Exploration</a></li>
              <li><a href="/exoplanets" className="hover:text-blue-300">Exoplanets</a></li>
              <li><a href="/technology" className="hover:text-blue-300">Technology</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-300"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Space Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
