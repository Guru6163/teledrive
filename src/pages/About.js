import React from 'react';


const About = () => {
  return (
    <div className="bg-gray-100 min-h-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              nulla massa. Vestibulum ut lacinia massa. Nunc eget tincidunt
              lorem, quis accumsan ex. Sed vitae nisl eu massa fermentum
              pellentesque. Nulla eget bibendum nibh. Suspendisse potenti.
              Praesent eleifend vel eros non faucibus. Aliquam ut elit vel
              lectus imperdiet pretium. Integer euismod pretium enim sed
              dignissim. Mauris posuere euismod ex, in laoreet ipsum finibus
              sed. Aliquam auctor erat ac tortor consectetur, nec malesuada
              risus bibendum. Integer in felis sapien. 
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              nulla massa. Vestibulum ut lacinia massa. Nunc eget tincidunt
              lorem, quis accumsan ex. Sed vitae nisl eu massa fermentum
              pellentesque. Nulla eget bibendum nibh. Suspendisse potenti.
              Praesent eleifend vel eros non faucibus. Aliquam ut elit vel
              lectus imperdiet pretium. Integer euismod pretium enim sed
              dignissim. Mauris posuere euismod ex, in laoreet ipsum finibus
              sed. Aliquam auctor erat ac tortor consectetur, nec malesuada
              risus bibendum. Integer in felis sapien.
            </p>
            <div className="mt-6 flex items-center">
              
              <p className="text-gray-500 text-sm">We're passionate about creating the best user experience for our customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
