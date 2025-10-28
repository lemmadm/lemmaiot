import React, { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";

// Helper function to encode form data for Netlify
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required.";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid.";
        return "";
      case "subject":
        return value.trim() ? "" : "Subject is required.";
      case "message":
        return value.trim() ? "" : "Message is required.";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validateField(name, value);
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <footer id="contact" className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://lemmaiot.com.ng/assets/images/logo-wh.png"
                alt="LemmaIoT Logo"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-blue-200 max-w-md mb-6">
              Your dedicated partner in digital transformation. We empower
              Nigerian businesses with the technology and expertise to succeed
              online.
            </p>
            <div className="flex space-x-5 mb-8">
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
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Our Process
                </a>
              </li>
              {/* <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wider uppercase">
              Get In Touch
            </h3>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* A hidden input for Netlify to identify the form */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-blue-900/50 border ${errors.name ? "border-red-400" : "border-blue-700"} rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-pink`}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full bg-blue-900/50 border ${errors.email ? "border-red-400" : "border-blue-700"} rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-pink`}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={`w-full bg-blue-900/50 border ${errors.subject ? "border-red-400" : "border-blue-700"} rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-pink`}
                    required
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`w-full bg-blue-900/50 border ${errors.message ? "border-red-400" : "border-blue-700"} rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-brand-pink`}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:bg-pink-800 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {submitStatus === "success" && (
                  <p role="alert" className="text-green-400 text-center">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p role="alert" className="text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
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
