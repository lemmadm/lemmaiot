import React from 'react';
import { TargetIcon, EyeIcon, UsersIcon, SparklesIcon, ShieldCheckIcon, ChartBarIcon } from './Icons';

// Fix: Refactored ValueCard to use an explicit `description` prop instead of `children` to resolve TypeScript errors.
const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: React.ReactNode }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-pink/10 text-brand-pink">
                {icon}
            </div>
        </div>
        <div className="ml-4">
            <h4 className="text-lg font-bold text-brand-blue-dark">{title}</h4>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="text-left">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">
                                The Heartbeat of Lemma<span className="text-brand-pink">IoT</span>
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-xl">
                                We are more than just a technology company. We are a team of passionate innovators, strategists, and creators with deep roots in Nigeria, dedicated to one single purpose: empowering local businesses to conquer the digital world.
                            </p>
                        </div>
                        <div className="mt-10 space-y-8">
                            <div>
                                <div className="flex items-center">
                                    <TargetIcon />
                                    <h3 className="ml-3 text-2xl font-bold text-brand-blue-dark">Our Mission</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    To democratize digital technology for Nigerian entrepreneurs, providing accessible, powerful, and affordable solutions that drive sustainable growth and innovation.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <EyeIcon />
                                    <h3 className="ml-3 text-2xl font-bold text-brand-blue-dark">Our Vision</h3>
                                </div>
                                <p className="mt-2 text-gray-600">
                                    To be the leading catalyst for digital transformation in Nigeria, fostering a thriving ecosystem where every business can achieve its full potential online.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <ValueCard icon={<UsersIcon />} title="Partnership Over Profit" description="We succeed when you succeed. We act as an extension of your team, building relationships based on trust and a shared ambition for growth." />
                        <ValueCard icon={<SparklesIcon />} title="Pragmatic Innovation" description="We leverage cutting-edge technology like AI not for novelty, but to solve real-world business problems and create tangible value for you." />
                        <ValueCard icon={<ShieldCheckIcon />} title="Unwavering Integrity" description="Transparency is at the core of everything we do. You'll always get honest advice, clear pricing, and a project plan you can count on." />
                         <ValueCard icon={<ChartBarIcon />} title="Measurable Impact" description="Our focus is on delivering results. We're driven by the tangible impact our work has on your bottom line and the Nigerian economy." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
