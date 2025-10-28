import React from 'react';
import { ChatBubbleIcon, DocumentTextIcon, RocketLaunchIcon } from './Icons';

// Fix: Refactored Step component to use an explicit `description` prop instead of `children` to resolve TypeScript errors.
type StepProps = {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
};

const Step = ({ icon, title, description }: StepProps) => (
    <div className="flex flex-col items-center text-center group">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-pink text-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <h4 className="text-xl leading-6 font-bold text-brand-blue-dark mb-2">{title}</h4>
        <p className="text-base leading-6 text-gray-600 max-w-xs">
            {description}
        </p>
    </div>
);

const CustomSolutionProcess: React.FC = () => {
    return (
        <section id="solution" className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Your Vision, Our Expertise</h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        We don't offer one-size-fits-all packages. We craft bespoke digital solutions through a collaborative, transparent process.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                    <Step icon={<ChatBubbleIcon />} title="1. Discovery & Strategy" description="We start with a deep dive into your business goals, target audience, and challenges. Together, we'll define a clear roadmap for success." />
                    <Step icon={<DocumentTextIcon />} title="2. Proposal & Design" description="You'll receive a detailed, transparent proposal. Once approved, our design team creates mockups that bring your vision to life for your feedback." />
                    <Step icon={<RocketLaunchIcon />} title="3. Development & Launch" description="Our expert developers build your solution with precision. After rigorous testing, we deploy your project and provide the support you need to thrive." />
                </div>
            </div>
        </section>
    );
};

export default CustomSolutionProcess;