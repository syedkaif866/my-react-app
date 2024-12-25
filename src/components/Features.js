import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📮',
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
      icon: '⚡',
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
      icon: '📊',
      title: 'Manage your team with reports',
      description: 'Measure what matters with Untitled\'s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
    },
    {
      icon: '💬',
      title: 'Connect with customers',
      description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
    },
    {
      icon: '🔗',
      title: 'Connect the tools you already use',
      description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
    },
    {
      icon: '👥',
      title: 'Our people make the difference',
      description: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-wider mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
            Analytics that feels like it's from the future
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
