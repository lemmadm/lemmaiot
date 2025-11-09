import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/images/logo-wh.png"
                alt="LemmaIoT Logo"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-blue-200 max-w-md mb-6">
              Your dedicated partner in digital transformation. We empower
              Nigerian businesses with the technology and expertise to succeed
              online.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com/Lemmaiot-109697137507070"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/lemmaIoT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/lemmaiot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://instagram.com/lemmaiot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Free Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3 text-blue-200">
              <p>
                Have a project in mind or just want to say hello? We'd love to
                hear from you.
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info.lemmaiot@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  info.lemmaiot@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+2347083682007"
                  className="hover:text-white transition-colors"
                >
                  +234 708 368 2007
                </a>
              </p>
              <a
                href="/contact"
                className="inline-block mt-2 bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} LemmaIoT. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
