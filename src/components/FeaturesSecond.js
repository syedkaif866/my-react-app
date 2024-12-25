import React from 'react';

const FeaturesSecond = () => {
  const features = [
    {
      icon: '📮',
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      learnMore: '#'
    },
    {
      icon: '⚡',
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      learnMore: '#'
    },
    {
      icon: '📊',
      title: 'Manage your team with reports',
      description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      learnMore: '#'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 md:mb-6">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16 md:mb-24">
          <img
            src="/images/test.jpg"
            alt="Dashboard Preview"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <a
                href={feature.learnMore}
                className="text-purple-600 font-medium flex items-center hover:text-purple-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
