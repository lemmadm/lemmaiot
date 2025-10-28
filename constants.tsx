
import React from 'react';
import type { Service, PricingPlan, Testimonial } from './types';
import { WebDevIcon, AiAutomationIcon, BusinessRegIcon, CloudIcon, DigitalMarketingIcon, BrandDesignIcon } from './components/Icons';

export const SERVICES_DATA: Service[] = [
  {
    icon: <WebDevIcon />,
    title: "Web Development",
    description: "Stunning, responsive websites that captivate your audience and are optimized for search engines.",
    category: "Development",
  },
  {
    icon: <AiAutomationIcon />,
    title: "AI Automation",
    description: "Integrate intelligent AI chatbots and automated workflows to boost efficiency and customer engagement.",
    category: "Development",
  },
  {
    icon: <BusinessRegIcon />,
    title: "Business Registration",
    description: "Navigate the complexities of CAC registration and legal compliance in Nigeria with our expert help.",
    category: "Business Growth",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud hosting and infrastructure to power your business's digital assets.",
    category: "Development",
  },
  {
    icon: <DigitalMarketingIcon />,
    title: "Digital Marketing",
    description: "Grow your online presence with targeted SEO, social media management, and ad campaigns.",
    category: "Business Growth",
  },
  {
    icon: <BrandDesignIcon />,
    title: "Branding & Design",
    description: "Create a memorable brand identity with professional logo design, and compelling visual assets.",
    category: "Business Growth",
  },
];

export const PRICING_DATA: PricingPlan[] = [
  {
    name: "Starter Pack",
    price: "₦50,000",
    description: "For new businesses needing a professional launchpad.",
    features: [
      "CAC Business Name Registration",
      "1-Page Landing Website",
      "Professional Email Address",
      "30-Day Support",
    ],
  },
  {
    name: "Business Cloud",
    price: "₦180,000",
    description: "The complete solution for growing businesses.",
    features: [
      "All in Starter Pack",
      "5-Page Business Website",
      "Basic SEO Setup",
      "AI Customer Service Chatbot",
      "Social Media Setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise Custom",
    price: "Contact Us",
    description: "Tailored solutions for established businesses with specific needs.",
    features: [
      "All in Business Cloud",
      "Custom Web Application",
      "Advanced AI Automation",
      "Dedicated Cloud Hosting",
      "Ongoing Digital Marketing",
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "LemmaIoT transformed our online presence. Their team is professional, fast, and delivered beyond our expectations. Our sales have increased by 40% since launching the new website!",
        name: "Amina Okoro",
        role: "CEO of Lagos Fashion House",
        avatar: "https://picsum.photos/100/100?random=1"
    },
    {
        quote: "The AI chatbot they developed for us handles 70% of customer inquiries, freeing up our team to focus on complex issues. It's been a game-changer for our support efficiency.",
        name: "Tunde Adebayo",
        role: "Operations Manager, TechServe Nigeria",
        avatar: "https://picsum.photos/100/100?random=2"
    },
    {
        quote: "Getting my business registered with the CAC was seamless with LemmaIoT. They handled all the paperwork and complexities, letting me focus on my business. Highly recommended!",
        name: "Chidinma Eze",
        role: "Founder, Chiddy's Cakes",
        avatar: "https://picsum.photos/100/100?random=3"
    }
];