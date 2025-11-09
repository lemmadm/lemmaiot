// Fix: Import ReactNode to resolve 'Cannot find namespace React' error.
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  category: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BusinessNameSuggestion {
  name: string;
  tagline: string;
}
