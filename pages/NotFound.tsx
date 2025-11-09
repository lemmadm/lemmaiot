import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20 md:py-32 text-center">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-brand-blue">404</h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-blue-dark">Page Not Found</h2>
        <p className="mt-4 text-gray-600">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <a 
          href="/" 
          className="mt-8 inline-block bg-brand-pink text-white px-8 py-3 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
