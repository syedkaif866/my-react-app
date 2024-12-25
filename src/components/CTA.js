import React from "react";

const CTA = () => {
  return (
    <div className="bg-white">
      {/* Mobile view */}
      <div className="lg:hidden">
        <div className="px-6 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Start your free trial
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="mt-10 flex flex-col gap-4">
              <button className="rounded-md bg-indigo-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </button>
              <button className="rounded-md bg-white px-8 py-3.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Start your free trial
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join over 4,000+ startups already growing with Untitled.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Get started
              </button>
              <button className="rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
