import React from "react";
import ContactForm from "../components/ContactForm";
import { MailIcon, UsersIcon } from "../components/Icons"; // Re-using for illustration

const ContactPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-blue-dark tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you grow. Whether you have a question about our
            services or want to start a new project, we'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-pink/10 text-brand-pink">
                  <MailIcon />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-brand-blue-dark">
                  Email Us
                </h4>
                <p className="mt-1 text-gray-600">
                  The best way to reach us for project inquiries. We'll get back
                  to you within one business day.
                </p>
                <a
                  href="mailto:info.lemmaiot@gmail.com"
                  className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  info.lemmaiot@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-pink/10 text-brand-pink">
                  <UsersIcon />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-brand-blue-dark">
                  Connect on Socials
                </h4>
                <p className="mt-1 text-gray-600">
                  Follow us on our social media channels to stay updated with
                  our latest news and insights.
                </p>
                <a
                  href="https://www.linkedin.com/in/lemmaiot"
                  className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  Find us on LinkedIn
                </a>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-bold text-brand-blue-dark">Business Hours</h4>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM (WAT)
              </p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
