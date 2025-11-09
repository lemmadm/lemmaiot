
import React from 'react';
import type { Service, PricingPlan, Testimonial } from './types';
import { WebDevIcon, AiAutomationIcon, BusinessRegIcon, CloudIcon, DigitalMarketingIcon, BrandDesignIcon, DocumentTextIcon, CalculatorIcon, ArchiveBoxIcon, PhotoIcon, VideoCameraIcon } from './components/Icons';

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

export const LEMMA_TOOLS = [
  {
    icon: <DocumentTextIcon />,
    name: "EasyBill Invoice Generator",
    description: "Create professional invoices and receipts instantly. Free for Nigerian businesses, with support for VAT, logos, and WhatsApp sharing.",
    link: "https://easybill.lemmaiot.com.ng/",
  },
  {
    icon: <CalculatorIcon />,
    name: "Q-Spark Quote Generator",
    description: "Instantly create business quotations and calculate pricing. The perfect tool for photographers, caterers, consultants, and more.",
    link: "https://quotes.lemmaiot.com.ng/",
  },
  {
    icon: <ArchiveBoxIcon />,
    name: "StockPilot Inventory",
    description: "The leading inventory management software for Nigerian SMEs. Manage stock, sales, and generate reports from one dashboard.",
    link: "https://stockpilot.ng/",
  },
  {
    icon: <PhotoIcon />,
    name: "Image Spark AI Generator",
    description: "Unleash creativity with our AI Image Generator. Create stunning, high-quality visuals from simple text prompts for your marketing.",
    link: "https://image.lemmaiot.com.ng/",
  },
  {
    icon: <VideoCameraIcon />,
    name: "Veo Spark AI Video",
    description: "Bring your ideas to life with AI-powered video. Generate engaging, short-form videos from text, perfect for ads and social content.",
    link: "https://veo.lemmaiot.com.ng/",
  },
];