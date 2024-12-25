import React from "react";

const Footer = () => {
  const footerLinks = {
    product: {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Features", href: "#" },
        { name: "Solutions", href: "#", badge: "New" },
        { name: "Tutorials", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Releases", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "News", href: "#" },
        { name: "Media kit", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "Events", href: "#" },
        { name: "Help centre", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    useCases: {
      title: "Use cases",
      links: [
        { name: "Startups", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "Government", href: "#" },
        { name: "SaaS centre", href: "#" },
        { name: "Marketplaces", href: "#" },
        { name: "Ecommerce", href: "#" },
      ],
    },
    social: {
      title: "Social",
      links: [
        { name: "Twitter", href: "#" },
        { name: "LinkedIn", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "GitHub", href: "#" },
        { name: "AngelList", href: "#" },
        { name: "Dribbble", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Terms", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenses", href: "#" },
        { name: "Settings", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-white">
      {/* Mobile view */}
      <div className="px-6 py-20 lg:hidden">
        <div className="flex flex-col space-y-10">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold leading-7 text-gray-900">{section.title}</h3>
              <ul role="list" className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {link.name}
                      {link.badge && (
                        <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <div className="flex items-center space-x-4">
            {/* <img src="/logo.svg" alt="Untitled UI" className="h-8 w-8" /> */}
            <p className="text-sm leading-6 text-gray-600">Untitled UI</p>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-600"> 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8">
          <div className="grid grid-cols-6 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold leading-7 text-gray-900">{section.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {link.name}
                        {link.badge && (
                          <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* <img src="/logo.svg" alt="Untitled UI" className="h-8 w-8" /> */}
                <p className="text-sm leading-6 text-gray-600">Untitled UI</p>
              </div>
              <p className="text-sm leading-6 text-gray-600"> 2077 Untitled UI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
