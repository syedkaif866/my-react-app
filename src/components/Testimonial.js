import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto">
          {/* Logo */}
          <div className="mb-16 flex gap-2 text-lg font-bold">
            <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.583374" y="16" width="7.99999" height="7.99999" fill="#079455"/>
              <rect x="24.5833" y="24" width="8" height="7.99999" transform="rotate(180 24.5833 24)" fill="#067647"/>
              <path d="M8.58347 16L16.5835 8V16L8.58347 24V16Z" fill="#ABEFC6"/>
              <path d="M16.5833 24L8.58336 32L8.58336 24L16.5833 16L16.5833 24Z" fill="#75E0A7"/>
              <path d="M0.583374 16L16.5833 0V7.99999L8.58336 16H0.583374Z" fill="#47CD89"/>
              <path d="M24.5833 24L8.58336 40L8.58336 32L16.5834 24L24.5833 24Z" fill="#17B26A"/>
            </svg>
           <div>Sisyphus</div> 

          </div>

          {/* Testimonial Text */}
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] font-medium text-gray-900 max-w-[45rem] mx-auto leading-[1.2] tracking-tight">
              We've been using Untitled to kick start every new project and can't imagine working without it.
            </h2>
          </div>

          {/* Author */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 overflow-hidden rounded-full bg-gray-200">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Candice Wu
            </h3>
            <p className="text-base text-gray-600">
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
