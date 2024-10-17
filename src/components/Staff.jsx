import React from 'react';

const Staff = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-20">
      <h1 className="text-4xl sm:text-4xl lg:text-7xl text-center tracking-wide">
        Welcome to the Staff Page
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        This page is dedicated to staff members. Here you can find information about VR training programs, career development, and more.
      </p>
       {/* Modules section */}
       <section className="flex flex-wrap justify-center mt-16">
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-blue-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold">Pre Arrival</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar purus mi. Ut pharetra est eu orci tempus, nec eleifend eros ultricies.   

            </p>
            <a href="#" className="text-blue-50 hover:underline mt-2">See more</a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-green-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold">Early Onboarding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar purus mi. Ut pharetra est eu orci tempus, nec eleifend eros ultricies.   

            </p>
            <a href="#" className="text-green-50 hover:underline mt-2">See more</a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-red-600 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold">Induction</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar purus mi. Ut pharetra est eu orci tempus, nec eleifend eros ultricies.   

            </p>
            <a href="#" className="text-red-50 hover:underline mt-2">See more</a>
          </div>
        </div>
        </section>
      {/* Add more content specific to staff here */}
    </div>
  );
};

export default Staff;