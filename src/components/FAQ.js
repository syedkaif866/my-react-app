import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time. Your new plan will take effect immediately, and we'll prorate your billing accordingly."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time with no penalties. You'll continue to have access to the service until the end of your billing period."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices, including PO numbers, company details, or any other relevant information you need for your records."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options. You'll be billed at the start of each period, and you can change your billing cycle at any time."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email from your account settings page. We'll send a verification email to your new address to confirm the change."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pr-12">
                    <p className="text-base text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team member"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Team member"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Team member"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
