import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission: Nurturing Football Talent
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              At Utawala Football Academy, our core mission is to identify, develop, and empower young football talent within the Utawala community and beyond. We believe in providing a supportive and professional environment where aspiring athletes can hone their skills, learn valuable life lessons, and achieve their full potential on and off the pitch.
            </p>
            <ul className="mt-6 space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Professional Coaching Staff
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                State-of-the-Art Training Facilities
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Emphasis on Holistic Development
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              className="rounded-md shadow-lg"
              src="/blend.webp"
              alt="Utawala Football Academy Training"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-700">
            Founded in 2008, Utawala Football Academy began with a simple vision: to provide a platform for young footballers in Utawala to pursue their passion and develop their talents. Over the years, we have grown into a respected academy, known for our commitment to player development, sportsmanship, and community involvement. We are proud of the many young athletes who have come through our ranks, and we continue to strive to make a positive impact on the local football landscape.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;