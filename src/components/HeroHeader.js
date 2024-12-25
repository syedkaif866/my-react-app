import React, { useState } from 'react';

const HeroHeader = () => {
  const [selected, setSelected] = useState('newFeature');

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg"></div>
          <span className="text-xl font-semibold">Untitled UI</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
          <div className="flex items-center space-x-1">
            <a href="#products" className="text-gray-700 hover:text-purple-600">Products</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex items-center space-x-1">
            <a href="#resources" className="text-gray-700 hover:text-purple-600">Resources</a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600">Pricing</a>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="w-10 h-10 bg-gray-200 rounded-full"
        />
        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10">
          <span className="block w-8 h-1 bg-gray-800"></span>
          <span className="block w-8 h-1 bg-gray-800"></span>
          <span className="block w-8 h-1 bg-gray-800"></span>
        </button>
      </nav>

      <div className="flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <div
              className={`bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm ${selected === 'newFeature' ? 'bg-purple-200' : ''}`}
              onClick={() => setSelected('newFeature')}
            >New feature</div>
            <div
              className={`text-purple-700 bg-blue-50 flex items-center rounded-full gap-2 ${selected === 'dashboard' ? 'font-bold' : ''}`}
              onClick={() => setSelected('dashboard')}
            >
              Check out the team dashboard
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.16666 7H12.8333M12.8333 7L7 1.16667M12.8333 7L7 12.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Beautiful analytics to grow smarter
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="w-full sm:w-auto px-8 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Sign up
            </button>
            <button className="w-full sm:w-auto px-8 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
              </svg>
              Demo
            </button>
          </div>
        </div>

        <div className="w-full max-w-5xl mt-16 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/picture1.jpg" 
              alt="Analytics Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;
