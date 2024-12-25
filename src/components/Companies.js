import React from 'react';

const Companies = () => {
  const companies = [
    {
      name: 'Boltshift',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 fill-current">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Lightbox',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-800 fill-current">
          <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
      )
    },
    {
      name: 'FeatherDev',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500 fill-current">
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
        </svg>
      )
    },
    {
      name: 'Spherule',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-purple-600 fill-current">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    },
    {
      name: 'GlobalBank',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'Nietzsche',
      logo: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-500 fill-current">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 mb-8">
          Join 4,000+ companies already growing
        </h2>
        
        <div className="grid grid-cols-2 gap-8 md:flex md:justify-between md:items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8">
                {company.logo}
              </div>
              <span className="text-sm font-medium text-gray-900">
                {company.name}
              </span>
              {index === companies.length - 1 && (
                <span className="ml-2 px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">
                  42.78 × 42.93
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
