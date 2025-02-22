import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#2196F3]">CekGizi+</h3>
            <p className="text-gray-600 text-sm">
              Helping children develop healthy eating habits through smart
              nutrition tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2196F3]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2196F3]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2196F3]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2196F3]">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#2196F3]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-[#2196F3]">
                  Chat with AI
                </Link>
              </li>
              <li>
                <Link
                  to="/school"
                  className="text-gray-600 hover:text-[#2196F3]"
                >
                  Data Sekolah
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2196F3]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2196F3]">
                  Health Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2196F3]">
                  MBG
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#2196F3]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: info@cekgiziplus.id</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Nutrition St, Health City, HC 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CekGizi+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
