import React, { useState, useEffect } from 'react';
import AIBusinessAdvisor from './AIBusinessAdvisor';

const particles = [
    { cx: '15%', cy: '20%', r: 3, delay: '0s', duration: '25s' },
    { cx: '5%', cy: '80%', r: 2, delay: '3s', duration: '35s' },
    { cx: '50%', cy: '50%', r: 4, delay: '7s', duration: '30s' },
    { cx: '80%', cy: '10%', r: 2, delay: '5s', duration: '28s' },
    { cx: '90%', cy: '70%', r: 3, delay: '9s', duration: '32s' },
    { cx: '30%', cy: '90%', r: 2, delay: '12s', duration: '26s' },
    { cx: '65%', cy: '35%', r: 3, delay: '2s', duration: '38s' },
    { cx: '40%', cy: '15%', r: 2, delay: '15s', duration: '30s' },
];

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-brand-blue-dark text-white overflow-hidden group">
      <div 
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <svg className="absolute w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
                <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.5)' }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0)' }} />
                </radialGradient>
            </defs>
            <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1">
                <line x1="15%" y1="20%" x2="50%" y2="50%" />
                <line x1="5%" y1="80%" x2="30%" y2="90%" />
                <line x1="50%" y1="50%" x2="65%" y2="35%" />
                <line x1="90%" y1="70%" x2="80%" y2="10%" />
                 <line x1="40%" y1="15%" x2="15%" y2="20%" />
            </g>
            {particles.map((p, i) => (
                <circle
                    key={i}
                    cx={p.cx}
                    cy={p.cy}
                    r={p.r}
                    fill="url(#particleGradient)"
                    className="animate-constellation transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:opacity-80"
                    style={{ animationDelay: p.delay, animationDuration: p.duration }}
                />
            ))}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/70 to-brand-blue-dark/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            style={{ transform: `translateY(${offsetY * 0.15}px)` }}
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight animate-fadeInUp"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Your Business,
              <br />
              <span className="bg-gradient-to-r from-white to-brand-pink-light bg-clip-text text-transparent">Digitally Transformed.</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg animate-fadeInUp"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Whether you need a new website, want to refine your existing one, or add powerful AI features, we provide the digital tools to help your Nigerian business thrive.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              <div className="relative group">
                <a href="/services" className="bg-brand-pink text-white px-8 py-4 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-bold text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 hover:animate-pulseGlow block">
                  Explore Services
                </a>
                <div role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-brand-blue-dark text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap transform translate-y-2 group-hover:translate-y-0">
                  See our full range of digital solutions
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-blue-dark"></div>
                </div>
              </div>
              <div className="relative group">
                <a href="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-bold text-center border border-white/30 block transform hover:-translate-y-1 hover:scale-105">
                  Our Process
                </a>
                <div role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-brand-blue-dark text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap transform translate-y-2 group-hover:translate-y-0">
                  Learn how we collaborate to bring your vision to life
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-blue-dark"></div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className="animate-fadeInUp" 
            style={{ animationDelay: '0.8s', transform: `translateY(${offsetY * 0.1}px)`, opacity: 0 }}
          >
             <AIBusinessAdvisor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;