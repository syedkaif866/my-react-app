import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/2.jpg",
      author: {
        name: "Olivia Rhye",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "20 Jan 2024"
      }
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      image: "/images/1.jpg",
      author: {
        name: "Phoenix Baker",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        date: "19 Jan 2024"
      }
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: "/images/3.jpg",
      author: {
        name: "Lana Steiner",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        date: "18 Jan 2024"
      }
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest blog posts</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        
        {/* Mobile View */}
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:hidden">
          {blogPosts.map((post, index) => (
            <article key={index} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.author.date} className="text-gray-500">
                    {post.author.date}
                  </time>
                  <span className="text-indigo-600">{post.category}</span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <img src={post.author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:block">
          <div className="grid grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="flex max-w-xl flex-col items-start">
                <div className="w-full">
                  <div className="relative w-full">
                    <img
                      src={post.image}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="text-indigo-600">{post.category}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-md bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            View all posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
